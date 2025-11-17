"use client";

import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { SolutionsHeroSection } from "@/components/sections/solutions/SolutionsHeroSection";
import { ServiceDetailsSection } from "@/components/sections/solutions/ServiceDetailsSection";
import { TechnologyStackSection } from "@/components/sections/solutions/TechnologyStackSection";
import { ROICalculatorSection } from "@/components/sections/solutions/ROICalculatorSection";
import { SolutionsCTASection } from "@/components/sections/solutions/SolutionsCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function SolutionsPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />

        <main className="min-h-screen">
          <SolutionsHeroSection />
          <ServiceDetailsSection />
          <TechnologyStackSection />
          <ROICalculatorSection />
          <SolutionsCTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
