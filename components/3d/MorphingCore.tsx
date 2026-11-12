"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function MorphingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      // Gentle cursor parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        state.pointer.x * 0.5,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        state.pointer.y * 0.5,
        0.05
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#c4b5fd" />
      <pointLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" />
      <pointLight position={[5, -5, 5]} intensity={1.5} color="#8b5cf6" />

      {/* Floating Sparkles Galaxy */}
      <Sparkles count={120} scale={12} size={2.5} speed={0.4} opacity={0.6} color="#38bdf8" />
      <Sparkles count={80} scale={8} size={3} speed={0.6} opacity={0.5} color="#a855f7" />

      {/* Main Distorted Organic Core */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <Sphere ref={meshRef} args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color="#4338ca"
            roughness={0.15}
            metalness={0.8}
            distort={0.45}
            speed={2.2}
            wireframe={true}
            wireframeLinewidth={1}
            emissive="#1e1b4b"
          />
        </Sphere>

        {/* Inner Glowing Crystal Core */}
        <Sphere ref={innerRef} args={[1.0, 32, 32]}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#8b5cf6"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
          />
        </Sphere>
      </Float>
    </>
  );
}

