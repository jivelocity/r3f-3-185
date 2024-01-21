import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MathUtils } from "three";

export function Skull({ z }: { z: number }) {
  const { nodes, materials } = useGLTF("/skull-transformed.glb") as any;
  const ref = useRef<THREE.Mesh>() as React.MutableRefObject<THREE.Mesh>;
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: MathUtils.randFloatSpread(2),
    y: MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  } as {
    x: number;
    y: number;
    rX: number;
    rY: number;
    rZ: number;
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.001)
    );
    ref.current.position.set(data.x * width, (data.y += 0.01), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.Skull.geometry}
      material={materials.skin}
      scale={1.8}
    />
  );
}
