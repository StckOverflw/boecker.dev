"use client";

import HomeSection from "@/components/sections/1-home-section";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";

export default function Home() {
  return (
    <>
      <div className="absolute w-full">
        <HomeSection />
        <div
          className="flex flex-col gap-14 mt-[100vh] pt-[200px] bg-background px-5 sm:px-0"
          style={{
            maskImage:
              "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2) 50px, rgba(0,0,0,1) 150px)",
          }}
        >
          <AboutSection />
          <WorkSection />
        </div>
      </div>
    </>
  );
}
