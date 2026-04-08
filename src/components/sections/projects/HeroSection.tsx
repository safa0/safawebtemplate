"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-hero-headline", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });

      gsap.from(".projects-hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".projects-hero-description", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="projects-hero-section w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="projects-hero-subtitle mb-6">
          <span className="inline-block px-4 py-2 bg-khaki-light rounded-full text-sm font-semibold text-earth">
            Showcase
          </span>
        </div>

        <h1 className="projects-hero-headline font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
          Fellowship Projects
        </h1>

        <p className="projects-hero-description text-lg md:text-xl text-khaki-dark max-w-2xl mx-auto leading-relaxed">
          Real AI projects built by our fellows — from computer vision to
          autonomous agents.
        </p>
      </div>
    </section>
  );
}
