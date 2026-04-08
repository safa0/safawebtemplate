import { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { FAQSection } from "@/components/sections/fellowship/FAQSection";
import { CTASection } from "@/components/sections/fellowship/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMeta } from "@/config/metadata";

export const metadata: Metadata = genMeta("faq");

export default function FAQPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <Header />
        <main>
          <FAQSection />
          <CTASection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
