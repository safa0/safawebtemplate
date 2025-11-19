import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { HeroSection } from "@/components/sections/how-we-work/HeroSection";
import { MethodologySection } from "@/components/sections/how-we-work/MethodologySection";
import { TimelineSection } from "@/components/sections/how-we-work/TimelineSection";
import { EngagementModelsSection } from "@/components/sections/how-we-work/EngagementModelsSection";
import { SuccessFactorsSection } from "@/components/sections/how-we-work/SuccessFactorsSection";
import { CTASection } from "@/components/sections/how-we-work/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMetadata } from "@/config/metadata";

export const metadata = genMetadata("how-we-work");

export default function HowWeWorkPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        <main className="vertical-scroll-container">
          <HeroSection />
          <MethodologySection />
          <TimelineSection />
          <EngagementModelsSection />
          <SuccessFactorsSection />
          <CTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
