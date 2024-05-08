"use client";

import HomeSection from "@/components/sections/1-home-section";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-scroll snap-y snap-mandatory">
      <HomeSection />
      <div className="bg-background z-20">
        <AboutSection />
        <WorkSection />
        <Footer />
      </div>
    </div>
  );
}
