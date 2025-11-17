"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        x: 100,
        opacity: 0,
      });

      gsap.from(".mission-cta", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-section w-full flex items-center justify-center px-8 md:px-20 bg-[#032f35]"
      style={{
        backgroundColor: "#032f35",
        height: "50vh", // Half size
        minHeight: "400px"
      }}
    >
      <div className="mission-text max-w-4xl w-full">
        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-white">
          {siteConfig.mission.title}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-12">
          {siteConfig.mission.statement}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-6">
          <Link
            href="#work"
            className="mission-cta group inline-flex items-center gap-2 text-white text-lg font-medium hover:gap-4 transition-all"
          >
            <span>Experience the Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="#inquire"
            className="mission-cta group inline-flex items-center gap-2 text-white text-lg font-medium hover:gap-4 transition-all"
          >
            <span>Inquire</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
