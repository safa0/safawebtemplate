import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/fellowship/ProblemSection";
import { TiersSection } from "@/components/sections/fellowship/TiersSection";
import { BenefitsSection } from "@/components/sections/fellowship/BenefitsSection";
import { CriteriaSection } from "@/components/sections/fellowship/CriteriaSection";
import { TestimonialsSection } from "@/components/sections/fellowship/TestimonialsSection";
import { FAQSection } from "@/components/sections/fellowship/FAQSection";
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

        <main className="vertical-scroll-container">
          <HeroSection />
          <ProblemSection />
          <TiersSection />
          <BenefitsSection />
          <CriteriaSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>

        <FooterSection />
      </div>
    </>
  );
}
