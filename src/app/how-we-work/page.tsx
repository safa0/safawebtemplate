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

export const metadata = {
  title: "How We Work | LambdaFlow™ - Our 5-Step Methodology",
  description: "Discover our proven 5-step methodology for enterprise automation: Discover, Design, Develop, Deploy, and Deliver. Learn how we transform your operations.",
  keywords: ["methodology", "process automation", "implementation approach", "automation framework", "RPA deployment"],
};

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
