"use client";

import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { IndustriesHeroSection } from "@/components/sections/IndustriesHeroSection";
import { IndustryCardsSection } from "@/components/sections/IndustryCardsSection";
import { CaseStudyTeaserSection } from "@/components/sections/CaseStudyTeaserSection";
import { IndustriesCTASection } from "@/components/sections/IndustriesCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function IndustriesPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        <main className="vertical-scroll-container">
          <IndustriesHeroSection />
          <IndustryCardsSection />
          <CaseStudyTeaserSection />
          <IndustriesCTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
