"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;
      const isDesktop = window.innerWidth >= 1024;

      // Simpler, faster animations on mobile
      if (isMobile) {
        gsap.from(".service-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        });
      } else {
        // Desktop: Use scrub animation
        gsap.from(".service-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
          y: 100,
          opacity: 0,
          stagger: 0.15,
        });

        gsap.from(".service-number", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: 1,
          },
          scale: 1.5,
          opacity: 0,
          stagger: 0.1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section flex flex-col md:flex-row w-full h-full"
    >
      {siteConfig.services.map((service, index) => (
        <Link
          key={service.number}
          href={service.link || "#"}
          className="service-card group flex-1 h-full relative overflow-hidden flex items-center bg-[#E8DCC4] transition-all duration-500 cursor-pointer md:hover:scale-[1.02] min-h-[450px] sm:min-h-[500px] md:min-h-full"
        >
          {/* Background image - subtle on mobile, full on desktop hover */}
          {service.background.startsWith("url") && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: service.background,
              }}
            />
          )}

          {/* Dark overlay for text contrast - always on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-black/20 md:bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

          {/* Khaki overlay - visible by default, fades on desktop hover */}
          <div className="absolute inset-0 bg-[#E8DCC4] md:group-hover:opacity-0 transition-opacity duration-500" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 w-full h-full flex flex-col justify-center">
            {/* Backdrop blur container - extends to section edges, positioned behind content */}
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

            {/* Number - larger and more prominent (hidden on mobile) */}
            <div className="service-number hidden md:block text-[4rem] sm:text-[5rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] font-light leading-none mb-4 sm:mb-6 md:mb-8 opacity-20 md:group-hover:opacity-30 transition-opacity text-gray-800 md:group-hover:text-white relative z-10">
              {service.number}
            </div>

            {/* Text content */}
            <div className="relative max-w-xl z-10">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 text-gray-800 md:group-hover:text-white transition-colors duration-500 leading-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-5 md:mb-6 text-gray-700 md:group-hover:text-white/90 transition-colors duration-500">
                {service.description}
              </p>

              {/* Learn more indicator - always visible on mobile, hover on desktop */}
              <div className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-gray-800 md:text-gray-800 md:group-hover:text-white md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                <span>Learn More</span>
                <span className="md:group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
