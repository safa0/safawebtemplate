import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
            <div data-horizontal-section>
              <ServicesSection />
            </div>
          </main>
        </div>

        {/* Vertical scroll section */}
        <div className="vertical-scroll-container">
          <FeaturedWorkSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
