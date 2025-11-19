import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
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
            <MissionSection />
          </div>
          <div data-horizontal-section className="hidden md:block">
            <ServicesSection />
          </div>
        </main>
        </div>

        {/* Vertical scroll section - transitions from horizontal */}
        <div className="vertical-scroll-container">
          <ImpactSection />
          <FeaturedWorkSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
