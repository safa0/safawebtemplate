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
      <BackgroundManager />
      <Header />

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
          <div data-horizontal-section>
            <FeaturedWorkSection />
          </div>
          <div data-horizontal-section>
            <FooterSection />
          </div>
        </main>
      </div>
    </>
  );
}
