"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-content > *", {
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
      className="w-full bg-midnight pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 lg:px-12"
    >
      <div className="about-hero-content max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Why We Exist
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          The AI industry needs domain experts. Not more CS
          graduates&mdash;but scientists and engineers who can apply machine
          learning to problems that actually matter.
        </p>
      </div>
    </section>
  );
}
