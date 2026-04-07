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
          {/* 1. DESIRE — Hook them */}
          <HeroSection />
          {/* 2. PROBLEM AWARENESS — Why this matters */}
          <ProblemSection />
          {/* 3. VALUE — What you get */}
          <BenefitsSection />
          {/* 4. MECHANISM — How it works */}
          <TiersSection />
          {/* 5. SELF-QUALIFICATION — Are you the right fit? */}
          <CriteriaSection />
          {/* 6. DIFFERENTIATION — Why us, not them */}
          <CompetitiveSection />
          {/* 7. FILTER — What we expect (after buy-in) */}
          <CommitmentsSection />
          {/* 8. TRUST — Social proof / launching */}
          <TestimonialsSection />
          {/* 9. REASSURANCE — Handle objections */}
          <FAQSection />
          {/* 10. ACTION — Final push */}
          <CTASection />
        </main>

        <FooterSection />
      </div>
    </>
  );
}
