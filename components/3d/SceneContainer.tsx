"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import MorphingCore from "./MorphingCore";

export default function SceneContainer() {
  const [mounted, setMounted] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user prefers reduced motion or device is low performance
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion) {
      setIsLowPower(true);
    }
  }, []);

  if (!mounted) {
    return <div className="w-full h-full" />;
  }

  if (isLowPower) {
    // Lightweight animated CSS fallback for low-power or reduced motion devices
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-primary-600/30 via-accent-cyan/20 to-purple-800/30 blur-3xl animate-glow-pulse" />
        <div className="w-48 h-48 rounded-full border border-primary-500/30 animate-spinSlow absolute" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <MorphingCore />
        </Suspense>
      </Canvas>
    </div>
  );
}

