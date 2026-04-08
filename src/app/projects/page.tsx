import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/projects/HeroSection";
import { ProjectsGridSection } from "@/components/sections/projects/ProjectsGridSection";
import { CTASection } from "@/components/sections/projects/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta("projects");

export default function ProjectsPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />
        <main>
          <HeroSection />
          <ProjectsGridSection />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
