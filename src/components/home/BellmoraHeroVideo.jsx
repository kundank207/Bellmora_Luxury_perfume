import React, { useRef, useEffect, useState } from 'react';

/**
 * BellmoraHeroVideo
 * Cinematic background video for the BELLMORA / AURA homepage hero.
 * Autoplay · muted · loop · playsInline · responsive.
 * Falls back gracefully:
 *   1. Static poster JPG (once rendered)
 *   2. Animated CSS gradient (immediate, while video renders)
 */
export function BellmoraHeroVideo({ className = '', overlayOpacity = 0.38 }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {
        setVideoFailed(true);
      }
    };

    const onCanPlay = () => { setVideoLoaded(true); tryPlay(); };
    const onError   = () => setVideoFailed(true);

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('error',   onError);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('error',   onError);
      video.pause();
    };
  }, []);

  /* Test if poster image exists */
  useEffect(() => {
    const img = new Image();
    img.onload  = () => {};
    img.onerror = () => setPosterFailed(true);
    img.src = '/videos/bellmora-poster.jpg';
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>

      {/* ── 1. MP4 video (primary, once rendered) ── */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${videoLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          src="/videos/bellmora-hero.mp4"
          poster="/videos/bellmora-poster.jpg"
          autoPlay muted loop playsInline preload="auto"
          aria-hidden="true"
        />
      )}

      {/* ── 2. Static JPG poster (while video loads / if codec fails) ── */}
      {!videoLoaded && !posterFailed && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{ backgroundImage: 'url(/videos/bellmora-poster.jpg)' }}
          aria-hidden="true"
        />
      )}

      {/* ── 3. Animated CSS gradient fallback (always visible until poster/video ready) ── */}
      {(!videoLoaded || videoFailed) && posterFailed && (
        <div
          className="absolute inset-0 w-full h-full bellmora-bg-anim"
          aria-hidden="true"
        />
      )}

      {/* ── Always-on CSS gradient so there's never a white flash ── */}
      {!videoLoaded && posterFailed && (
        <style>{`
          @keyframes bellmoraBg {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .bellmora-bg-anim {
            background: linear-gradient(135deg,
              #0d0510 0%, #1a0c08 20%, #0d0810 40%,
              #180a06 60%, #08040e 80%, #0d0510 100%
            );
            background-size: 400% 400%;
            animation: bellmoraBg 12s ease infinite;
          }
          /* Gold particle shimmer */
          .bellmora-bg-anim::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse 60% 40% at 50% 50%,
              rgba(198,164,106,0.08) 0%, transparent 70%
            );
            animation: bellmoraBg 8s ease-in-out infinite reverse;
          }
        `}</style>
      )}

      {/* ── Dark readability overlay ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `linear-gradient(
            160deg,
            rgba(4,2,8,${overlayOpacity * 0.9}) 0%,
            rgba(4,2,8,${overlayOpacity * 0.4}) 45%,
            rgba(4,2,8,${overlayOpacity * 0.7}) 100%
          )`,
        }}
        aria-hidden="true"
      />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
