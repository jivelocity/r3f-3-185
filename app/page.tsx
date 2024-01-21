"use client";

import { CanvasSkull } from "@/components/CanvasSkull";
import { Stats } from "@react-three/drei";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <CanvasSkull />
      <Stats />
      <div className="w-full h-full absolute inset-0 text-white px-4 flex flex-col justify-center items-center ">
        <div className="flex gap-6 flex-col h-full justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-black max-w-2xl text-center leading-[80%] md:leading-[78%]">
            EVERY SOUL WILL TASTE{" "}
            <span className="font-rubik font-normal">DEATH</span>
          </h1>
          <p className="text-xl max-w-xl text-center ">
            كُلُّ نَفْسٍۢ ذَآئِقَةُ ٱلْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ
            أُجُورَكُمْ يَوْمَ ٱلْقِيَـٰمَةِ ۖ فَمَن زُحْزِحَ عَنِ ٱلنَّارِ
            وَأُدْخِلَ ٱلْجَنَّةَ فَقَدْ فَازَ ۗ وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَآ
            إِلَّا مَتَـٰعُ ٱلْغُرُورِ ١٨٥
          </p>
          <p className="max-w-2xl text-center">
            Every soul will taste death, and you will only be given your [full]
            compensation on the Day of Resurrection. So he who is drawn away
            from the Fire and admitted to Paradise has attained [his desire].
            And what is the life of this world except the enjoyment of delusion.
            <br /> <span className="font-bold">QS. 3:185</span>
          </p>
        </div>

        <p className="self-start text-sm max-w-[27rem] justify-self-end mb-12">
          &quot;The people who passed away yesterday were just like us. They
          thought that they would still be alive tomorrow.&quot;
        </p>
        <p className="text-xs mb-4">© 2024 Rajibaa</p>
      </div>
    </main>
  );
}
