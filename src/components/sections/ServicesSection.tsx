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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section flex flex-col md:flex-row w-full h-full"
    >
      {siteConfig.services.map((service) => (
        <Link
          key={service.number}
          href={service.link || "#"}
          className="service-card group flex-1 h-full relative overflow-hidden flex items-center bg-[#E8DCC4] transition-all duration-500 cursor-pointer hover:scale-[1.02] min-h-[400px] sm:min-h-[450px] md:min-h-full"
        >
          {/* Background image - hidden by default, visible on hover */}
          {service.background.startsWith("url") && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: service.background,
              }}
            />
          )}

          {/* Dark overlay on hover for better text contrast */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />

          {/* Khaki overlay - visible by default, fades on hover */}
          <div className="absolute inset-0 bg-[#E8DCC4] group-hover:opacity-0 transition-opacity duration-500" />

          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 w-full h-full flex flex-col justify-center">
            {/* Backdrop blur container - extends to section edges, positioned behind content */}
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

            {/* Number - larger and more prominent */}
            <div className="service-number text-[5rem] sm:text-[6rem] md:text-[12rem] lg:text-[18rem] xl:text-[22rem] font-light leading-none mb-4 sm:mb-6 md:mb-8 opacity-20 group-hover:opacity-30 transition-opacity text-gray-800 group-hover:text-white relative z-10">
              {service.number}
            </div>

            {/* Text content */}
            <div className="relative max-w-xl z-10">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 md:mb-6 text-gray-800 group-hover:text-white transition-colors duration-500 leading-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-5 md:mb-6 text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                {service.description}
              </p>

              {/* Learn more indicator on hover */}
              <div className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span>Learn More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
