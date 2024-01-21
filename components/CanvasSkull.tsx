"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Skull } from "@/components/Skull";

type Preset = {
  preset:
    | "night"
    | "forest"
    | "studio"
    | "dawn"
    | "apartment"
    | "city"
    | "lobby"
    | "park"
    | "sunset"
    | "warehouse"
    | undefined;
};

export function CanvasSkull({ count = 100, depth = 10 }) {
  const [preset, setPreset] = useState("night" as Preset["preset"]);

  return (
    <>
      <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110 }}>
        <color attach="background" args={["#0e0e0e"]} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense>
          <Environment preset={preset} />
          {Array.from({ length: count }, (_, i) => (
            <Skull key={i} z={(-i / count) * depth} />
          ))}
          <EffectComposer>
            <DepthOfField
              focalLength={0.2}
              height={0}
              bokehScale={1}
              target={[0, 0, depth / 2]}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <div className="absolute top-0 right-0 z-10 p-4">
        <select
          className="bg-black text-white p-2 rounded-md outline-none"
          onChange={(e) => setPreset(e.target.value as Preset["preset"])}
        >
          <option value="night">Night</option>
          <option value="forest">Forest</option>
          <option value="studio">Studio</option>
          <option value="dawn">Dawn</option>
          <option value="apartment">Apartment</option>
          <option value="city">City</option>
          <option value="lobby">Lobby</option>
        </select>
      </div>
    </>
  );
}
