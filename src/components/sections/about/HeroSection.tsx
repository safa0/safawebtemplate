"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-headline", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });

      gsap.from(".about-hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".about-hero-description", {
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
      className="about-hero-section w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="about-hero-subtitle mb-6">
          <span className="inline-block px-4 py-2 bg-khaki-light rounded-full text-sm font-semibold text-earth">
            Our Story
          </span>
        </div>

        <h1 className="about-hero-headline font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
          Pioneers in Enterprise Automation
        </h1>

        <p className="about-hero-description text-lg md:text-xl text-khaki-dark max-w-2xl mx-auto leading-relaxed">
          Since 2020, we have been at the forefront of intelligent automation, helping enterprises transform their operations through cutting-edge RPA and AI integration solutions.
        </p>
      </div>
    </section>
  );
}
