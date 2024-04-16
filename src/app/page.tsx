"use client";

import HomeSection from "@/components/sections/1-home-section";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <div className="absolute w-full">
        <HomeSection />
        <div className="flex flex-col gap-14 mt-[100vh] pt-[100px] bg-background px-5 sm:px-0">
          <AboutSection />
          <WorkSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
