import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <InfiniteMarquee />
    </div>
  );
}
