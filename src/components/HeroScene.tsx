import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type * as THREE from "three";

function Wireframe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial color="#bb3507" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <Wireframe />
        <Sparkles count={36} scale={6.5} size={2.2} speed={0.3} color="#bb3507" />
      </Canvas>
    </div>
  );
}
