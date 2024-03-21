"use client";

import HomeSection from "@/components/sections/1-home-section";
import WorkSection from "@/components/sections/2-work-section";

export default function Home() {
  return (
    <>
      <div className="absolute w-full h-[100svh]">
        <HomeSection />
        <WorkSection />
      </div>
    </>
  );
}
