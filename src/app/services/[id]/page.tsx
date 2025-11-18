import { Header } from "@/components/ui/Header";
import { PageTransition } from "@/components/ui/PageTransition";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = siteConfig.services.find((s) => s.number === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageTransition />
      <div className="page-content min-h-screen bg-khaki-light">
        <Header />

        <main className="container mx-auto px-8 md:px-20 py-20">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-earth hover:text-khaki-dark transition-colors mb-12"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>

          {/* Service header */}
          <div className="mb-16">
            <div className="text-[8rem] md:text-[12rem] font-light leading-none opacity-20 text-gray-800 mb-4">
              {service.number}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              {service.description}
            </p>
          </div>

          {/* Detailed content */}
          <div className="max-w-4xl space-y-8">
            {service.detailedContent?.map((paragraph, index) => (
              <p
                key={`content-${index}`}
                className="text-lg md:text-xl leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-16 border-t border-gray-300">
            <h3 className="font-serif text-3xl mb-6 text-gray-800">
              Ready to get started?
            </h3>
            <Link
              href="/#inquire"
              className="inline-flex items-center gap-2 bg-earth text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-khaki-dark transition-colors"
            >
              <span>Schedule a Consultation</span>
              <span>→</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    id: service.number,
  }));
}
