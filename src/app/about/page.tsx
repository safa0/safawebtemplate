import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { HeroSection } from "@/components/sections/about/HeroSection";
import { CompanyStorySection } from "@/components/sections/about/CompanyStorySection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { CTASection } from "@/components/sections/about/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta("about");

export default function AboutPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />
        <main>
          <HeroSection />
          <CompanyStorySection />
          <ValuesSection />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
