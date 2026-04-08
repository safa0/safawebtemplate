import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/fellowship/ProblemSection";
import { TiersSection } from "@/components/sections/fellowship/TiersSection";
import { BenefitsSection } from "@/components/sections/fellowship/BenefitsSection";
import { CommitmentsSection } from "@/components/sections/fellowship/CommitmentsSection";
import { CriteriaSection } from "@/components/sections/fellowship/CriteriaSection";
import { CompetitiveSection } from "@/components/sections/fellowship/CompetitiveSection";
import { TestimonialsSection } from "@/components/sections/fellowship/TestimonialsSection";
import { CTASection } from "@/components/sections/fellowship/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { BackgroundManager } from "@/components/ui/BackgroundManager";

export default function Home() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        {/* Horizontal scroll section */}
        <div data-horizontal-scroll className="horizontal-wrapper">
          <main className="horizontal-container">
            <div data-horizontal-section>
              <HeroSection />
            </div>
            <div data-horizontal-section>
              <ProblemSection />
            </div>
            <div data-horizontal-section className="hidden md:block">
              <BenefitsSection />
            </div>
          </main>
        </div>

        {/* Vertical scroll section - transitions from horizontal */}
        <div className="vertical-scroll-container">
          <TiersSection />
          <CriteriaSection />
          <CompetitiveSection />
          <CommitmentsSection />
          <TestimonialsSection />
          <CTASection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
