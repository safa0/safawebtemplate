import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { PrivacyContent } from "@/components/sections/privacy/PrivacyContent";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta("privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />
        <main>
          <PrivacyContent />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
