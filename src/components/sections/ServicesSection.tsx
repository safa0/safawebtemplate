"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
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
        <div
          key={service.number}
          className="service-card flex-1 h-full relative overflow-hidden flex items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: service.background.startsWith("url")
                ? service.background
                : undefined,
              // Always set a fallback backgroundColor for better performance
              backgroundColor: service.background.startsWith("url")
                ? "#3E3426" // Dark fallback for image backgrounds (ensures white text is visible)
                : service.background,
            }}
          />

          <div className={`relative z-10 p-8 md:p-16 ${service.textColor}`}>
            <div className="service-number text-9xl md:text-[15rem] font-light leading-none mb-8 opacity-30">
              {service.number}
            </div>

            <h3 className="font-serif text-4xl md:text-5xl mb-6">
              {service.title}
            </h3>

            <p className="text-lg leading-relaxed max-w-md mb-12">
              {service.description}
            </p>

            {service.hasImage && (
              <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.imageUrl!}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
