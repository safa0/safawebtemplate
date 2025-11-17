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

export const metadata = {
  title: "Why Automate | LambdaFlow™ - Transform Your Operations",
  description: "Discover the ROI and benefits of intelligent automation. Learn how enterprises achieve 300% ROI, reduce errors by 95%, and improve employee satisfaction.",
  keywords: ["automation ROI", "business benefits", "process automation", "RPA benefits", "automation case study"],
};

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
