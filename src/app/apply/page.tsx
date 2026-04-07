import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { ApplyHeroSection } from "@/components/sections/apply/ApplyHeroSection";
import { ApplicationStepsSection } from "@/components/sections/apply/ApplicationStepsSection";
import { WhatToExpectSection } from "@/components/sections/apply/WhatToExpectSection";
import { ApplicationFormSection } from "@/components/sections/apply/ApplicationFormSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta("apply");

export default function ApplyPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />
        <main>
          <ApplyHeroSection />
          <ApplicationStepsSection />
          <WhatToExpectSection />
          <ApplicationFormSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
