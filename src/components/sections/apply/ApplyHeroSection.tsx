"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function ApplyHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".apply-hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-dark pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 lg:px-12"
    >
      <div className="apply-hero-content max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Applications Open
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Your Application
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          The process is lightweight but intentional. We filter for
          signal&mdash;curiosity, commitment, thinking ability&mdash;not
          credentials or polish.
        </p>
      </div>
    </section>
  );
}
