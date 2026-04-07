"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section w-full bg-accent section-padding-large"
    >
      <div className="cta-content max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {siteConfig.footer.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Your science degree is already your foundation. Let us help you build
          on it.
        </p>
        <Link
          href={siteConfig.footer.cta.link}
          className="inline-block px-10 py-4 bg-white text-accent text-lg font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          {siteConfig.footer.cta.text}
        </Link>
      </div>
    </section>
  );
}
