import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { BackgroundManager } from "@/components/ui/BackgroundManager";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata = {
  title: "Contact Us | LambdaFlow™ - Get in Touch",
  description: "Get in touch with LambdaFlow™ to discuss your automation needs. Schedule a free consultation and discover how we can transform your operations.",
  keywords: ["contact LambdaFlow", "automation consultation", "get in touch", "schedule meeting", "automation assessment"],
};

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

