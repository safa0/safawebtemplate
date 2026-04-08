"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-hero-headline", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
      });

      gsap.from(".projects-hero-subtitle", {
        duration: 0.8,
        opacity: 0,
        y: 15,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-32 pb-8 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="projects-hero-headline font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-dark">
          Explore Our Top
          <br />
          Fellowship Projects
        </h1>
        <p className="projects-hero-subtitle text-dark/50 text-sm mt-2">
          Browse Our Project Portfolio
        </p>
      </div>
    </section>
  );
}
