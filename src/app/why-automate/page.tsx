import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { HeroSection } from "@/components/sections/why-automate/HeroSection";
import { StatisticsSection } from "@/components/sections/why-automate/StatisticsSection";
import { BenefitsSection } from "@/components/sections/why-automate/BenefitsSection";
import { UseCasesSection } from "@/components/sections/why-automate/UseCasesSection";
import { ROICalculatorSection } from "@/components/sections/why-automate/ROICalculatorSection";
import { CTASection } from "@/components/sections/why-automate/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMetadata } from "@/config/metadata";

export const metadata = genMetadata("why-automate");

export default function WhyAutomatePage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        <main className="vertical-scroll-container">
          <HeroSection />
          <StatisticsSection />
          <BenefitsSection />
          <UseCasesSection />
          <ROICalculatorSection />
          <CTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
