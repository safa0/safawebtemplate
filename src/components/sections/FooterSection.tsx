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
      className="footer-section w-full h-full flex items-center justify-center text-center px-8"
    >
      <div>
        <h2 className="footer-title font-serif text-5xl md:text-7xl mb-8 text-earth max-w-4xl mx-auto">
          {siteConfig.footer.title}
        </h2>

        <Link
          href={siteConfig.footer.cta.link}
          className="footer-cta inline-block px-12 py-4 bg-earth text-white rounded-full text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          {siteConfig.footer.cta.text} →
        </Link>
      </div>
    </section>
  );
}
