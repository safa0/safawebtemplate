"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-cta-content", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-cta-content",
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
      className="w-full bg-accent section-padding-large"
    >
      <div className="about-cta-content max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Interested?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10">
          If this resonates with you, we want to hear from you.
        </p>
        <Link
          href="/apply"
          className="inline-block px-10 py-4 bg-white text-accent text-lg font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
