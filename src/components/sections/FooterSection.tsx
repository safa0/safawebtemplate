"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".footer-cta", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="footer-section w-full h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-8 py-12 sm:py-16 md:py-20 min-h-screen"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="footer-title font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 md:mb-10 text-earth leading-tight">
          {siteConfig.footer.title}
        </h2>

        <Link
          href={siteConfig.footer.cta.link}
          className="footer-cta inline-block px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-earth text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          {siteConfig.footer.cta.text} →
        </Link>
      </div>
    </section>
  );
}
