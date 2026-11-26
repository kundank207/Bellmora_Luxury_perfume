import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, OrbitControls } from '@react-three/drei';
import { ErrorBoundary } from '../common/ErrorBoundary';

// Procedural 3D Luxury Perfume Bottle Mesh
const PerfumeBottleMesh = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      const px = state.pointer?.x ?? 0;
      const py = state.pointer?.y ?? 0;
      // Gentle floating rotation and mouse tilt
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.25 + (px * 0.4);
      groupRef.current.rotation.x = py * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Liquid Core inside the bottle (Warm Amber Liquid) */}
      <mesh position={[0, 1.0, 0]}>
        <boxGeometry args={[1.3, 1.8, 0.7]} />
        <meshPhysicalMaterial
          color="#C6A46A"
          transmission={0.4}
          opacity={0.9}
          transparent
          roughness={0.1}
          ior={1.4}
        />
      </mesh>

      {/* Outer Heavy Crystal Glass Flacon */}
      <mesh position={[0, 1.05, 0]}>
        <boxGeometry args={[1.6, 2.2, 0.95]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.95}
          opacity={1}
          transparent
          roughness={0.05}
          reflectivity={0.9}
          ior={1.52}
          thickness={0.8}
        />
      </mesh>

      {/* Gold Label Plate */}
      <mesh position={[0, 1.1, 0.49]}>
        <planeGeometry args={[1.1, 1.0]} />
        <meshStandardMaterial
          color="#F8F5EF"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Polished Gold Neck Collar */}
      <mesh position={[0, 2.25, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.25, 32]} />
        <meshStandardMaterial
          color="#C6A46A"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Heavy Gold Spray Atomizer Neck */}
      <mesh position={[0, 2.45, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 32]} />
        <meshStandardMaterial
          color="#D9C29A"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* Sculpted Espresso / Black Bakelite & Gold Cap */}
      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.5, 32]} />
        <meshStandardMaterial
          color="#3B2D25"
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>

      {/* Gold Crown Band on Cap */}
      <mesh position={[0, 2.6, 0]}>
        <cylinderGeometry args={[0.43, 0.43, 0.08, 32]} />
        <meshStandardMaterial
          color="#C6A46A"
          metalness={0.95}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

// Fallback image view in case WebGL is unavailable or errors
export const StaticHeroFallback = () => (
  <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center p-6 animate-fadeIn">
    <div className="relative max-w-sm mx-auto">
      <div className="absolute inset-0 bg-aura-gold/20 blur-3xl rounded-full transform -translate-y-4" />
      <img
        src="/images/products/unisex/bellmora-santal-ethereal.jpg"
        alt="BELLMORA LUXURY Santal Ethereal flacon"
        className="relative z-10 w-full h-auto max-h-[460px] object-cover rounded-3xl shadow-2xl border-4 border-white/80"
      />
      <div className="absolute -bottom-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-aura-gold/30 text-xs">
        <span className="font-serif font-bold text-aura-espresso block text-sm">Santal Ethereal</span>
        <span className="text-[10px] text-aura-gold uppercase tracking-wider font-semibold">30% Pure Extrait</span>
      </div>
    </div>
  </div>
);

// Inner Canvas Container (Isolated so ErrorBoundary can catch any WebGL/Canvas error)
const ThreeCanvasContainer = () => {
  return (
    <div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center">
      <div className="absolute inset-0 bg-radial-luxury pointer-events-none" />

      <Suspense fallback={<StaticHeroFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          gl={{ antialias: true, alpha: true, powerPreference: 'default' }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 8, 5]} intensity={2.5} color="#FFF5EA" />
          <pointLight position={[-4, 3, -2]} intensity={1.8} color="#C6A46A" />
          <spotLight position={[0, 6, 4]} intensity={2.0} angle={0.6} penumbra={0.8} />

          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
            <PerfumeBottleMesh />
          </Float>

          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.45}
            scale={6}
            blur={2.4}
            far={4}
            color="#3B2D25"
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2 + 0.1}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs border border-aura-beige text-[10px] text-aura-grey flex items-center space-x-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-aura-gold animate-ping" />
        <span>Interactive 3D Flacon • Drag to rotate</span>
      </div>
    </div>
  );
};

export const PerfumeBottle3D = () => {
  const [hasWebGL, setHasWebGL] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    } finally {
      setChecked(true);
    }
  }, []);

  if (!checked) {
    return <StaticHeroFallback />;
  }

  if (!hasWebGL) {
    return <StaticHeroFallback />;
  }

  return (
    <ErrorBoundary fallback={<StaticHeroFallback />}>
      <ThreeCanvasContainer />
    </ErrorBoundary>
  );
};
