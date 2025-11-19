import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { HeroSection } from "@/components/sections/about/HeroSection";
import { CompanyStorySection } from "@/components/sections/about/CompanyStorySection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { LeadershipSection } from "@/components/sections/about/LeadershipSection";
import { AchievementsSection } from "@/components/sections/about/AchievementsSection";
import { TechnologyPartnersSection } from "@/components/sections/about/TechnologyPartnersSection";
import { CTASection } from "@/components/sections/about/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMetadata } from "@/config/metadata";

export const metadata = genMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        <main className="vertical-scroll-container">
          <HeroSection />
          <CompanyStorySection />
          <ValuesSection />
          <LeadershipSection />
          <AchievementsSection />
          <TechnologyPartnersSection />
          <CTASection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
