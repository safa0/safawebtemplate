import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { generateMetadata as genMetadata } from "@/config/metadata";

export const metadata = genMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageTransition />
      <div className="page-content">
        <BackgroundManager />
        <Header />

        <main className="vertical-scroll-container">
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}

