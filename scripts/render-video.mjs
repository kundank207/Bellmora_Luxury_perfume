/**
 * BELLMORA — Cinematic Video Renderer
 * Uses Puppeteer to render Three.js frames → ffmpeg encodes MP4
 * Run: node scripts/render-video.mjs
 */

import puppeteer from 'puppeteer';
import ffmpegStatic from 'ffmpeg-static';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SCENE_HTML = path.join(__dirname, 'bellmora-scene.html');
const OUTPUT_DIR = path.join(ROOT, 'public', 'videos');
const FRAMES_DIR = path.join(ROOT, 'scripts', '_frames');
const OUTPUT_MP4 = path.join(OUTPUT_DIR, 'bellmora-hero.mp4');
const OUTPUT_JPG = path.join(OUTPUT_DIR, 'bellmora-poster.jpg');
const FPS = 30;
const W = 1920, H = 1080;

/* ── Prep directories ── */
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(FRAMES_DIR, { recursive: true });

function log(msg) { process.stdout.write(`[render] ${msg}\n`); }

/* ════════════════════════════════
   STEP 1 — Launch Puppeteer & render frames
════════════════════════════════ */
async function renderFrames() {
  log('Launching browser…');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-file-access-from-files',
      '--enable-webgl',
      '--use-gl=angle',
      '--enable-features=Vulkan',
      '--disable-gpu-sandbox',
      '--ignore-gpu-blocklist',
      `--window-size=${W},${H}`,
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });

  /* Silence console noise */
  page.on('console', m => {
    if (m.type() !== 'error') return;
    log(`[browser] ${m.text()}`);
  });

  const fileUrl = `file://${SCENE_HTML.replace(/\\/g, '/')}`;
  log(`Loading scene: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });

  /* Wait until Three.js scene signals ready */
  log('Waiting for scene to initialise…');
  await page.waitForFunction(() => window.__ready === true, { timeout: 30000 });

  const totalFrames = await page.evaluate(() => window.__totalFrames);
  log(`Scene ready. Rendering ${totalFrames} frames @ ${FPS}fps…`);

  let posterSaved = false;

  for (let f = 0; f < totalFrames; f++) {
    /* Trigger frame render */
    await page.evaluate((frame) => {
      window.__frameReady = false;
      window.__renderFrame(frame);
    }, f);

    /* Wait for frame data */
    await page.waitForFunction(() => window.__frameReady === true, { timeout: 10000 });

    /* Get JPEG data URL */
    const dataURL = await page.evaluate(() => window.__frameDataURL);

    /* Write frame JPEG to disk */
    const base64 = dataURL.replace(/^data:image\/jpeg;base64,/, '');
    const framePath = path.join(FRAMES_DIR, `frame_${String(f).padStart(5, '0')}.jpg`);
    fs.writeFileSync(framePath, Buffer.from(base64, 'base64'));

    /* Save frame 1 as poster (slight delay into scene for best composition) */
    if (f === Math.floor(FPS * 13.5) && !posterSaved) {
      fs.copyFileSync(framePath, OUTPUT_JPG);
      log(`Poster saved from frame ${f}`);
      posterSaved = true;
    }

    if (f % 30 === 0) log(`  Frame ${f}/${totalFrames} (${((f/totalFrames)*100).toFixed(1)}%)`);
  }

  /* Also capture poster from final scene if not yet saved */
  if (!posterSaved) {
    const lastPath = path.join(FRAMES_DIR, `frame_${String(totalFrames-1).padStart(5,'0')}.jpg`);
    if (fs.existsSync(lastPath)) fs.copyFileSync(lastPath, OUTPUT_JPG);
  }

  await browser.close();
  log(`All ${totalFrames} frames rendered.`);
}

/* ════════════════════════════════
   STEP 2 — Encode MP4 with ffmpeg
════════════════════════════════ */
function encodeVideo() {
  return new Promise((resolve, reject) => {
    log('Encoding MP4 with ffmpeg…');
    log(`ffmpeg binary: ${ffmpegStatic}`);

    const inputPattern = path.join(FRAMES_DIR, 'frame_%05d.jpg');

    const args = [
      '-y',                        // overwrite
      '-framerate', String(FPS),
      '-i', inputPattern,
      '-c:v', 'libx264',
      '-preset', 'medium',
      '-crf', '18',               // high quality
      '-pix_fmt', 'yuv420p',      // browser-compatible
      '-movflags', '+faststart',   // web optimised
      '-vf', `scale=${W}:${H}`,
      OUTPUT_MP4,
    ];

    log(`Running: ffmpeg ${args.join(' ')}`);

    const proc = spawn(ffmpegStatic, args, { stdio: 'inherit' });

    proc.on('error', (err) => {
      log(`ffmpeg error: ${err.message}`);
      reject(err);
    });

    proc.on('close', (code) => {
      if (code === 0) {
        const size = (fs.statSync(OUTPUT_MP4).size / 1024 / 1024).toFixed(2);
        log(`MP4 encoded successfully! Size: ${size} MB`);
        log(`Output: ${OUTPUT_MP4}`);
        resolve();
      } else {
        reject(new Error(`ffmpeg exited with code ${code}`));
      }
    });
  });
}

/* ════════════════════════════════
   STEP 3 — Cleanup frames
════════════════════════════════ */
function cleanupFrames() {
  log('Cleaning up frame files…');
  const files = fs.readdirSync(FRAMES_DIR);
  files.forEach(f => fs.unlinkSync(path.join(FRAMES_DIR, f)));
  fs.rmdirSync(FRAMES_DIR);
  log('Cleanup done.');
}

/* ════════════════════════════════
   MAIN
════════════════════════════════ */
(async () => {
  const startTime = Date.now();
  try {
    await renderFrames();
    await encodeVideo();
    cleanupFrames();

    const elapsed = ((Date.now()-startTime)/1000/60).toFixed(1);
    log(`\n✅ BELLMORA video complete in ${elapsed} minutes.`);
    log(`   Video: ${OUTPUT_MP4}`);
    log(`   Poster: ${OUTPUT_JPG}`);
    process.exit(0);
  } catch(err) {
    log(`\n❌ Error: ${err.message}`);
    console.error(err);
    process.exit(1);
  }
})();
