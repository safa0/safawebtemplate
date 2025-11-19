"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-highlight", {
        duration: 1.2,
        opacity: 0,
        scale: 0.9,
        delay: 0.8,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative w-full min-h-screen bg-gradient-to-br from-earth to-khaki-dark flex items-center justify-center px-8 md:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="hero-subtitle text-lg md:text-xl text-khaki-light font-medium uppercase tracking-widest mb-4">
            Why Automate?
          </p>

          <h1 className="hero-title font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white max-w-5xl mx-auto">
            Unlock Growth with Intelligent Automation
          </h1>

          <p className="hero-description text-lg md:text-xl text-khaki-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade automation delivers measurable ROI, eliminates manual work, and empowers your team to focus on strategic growth. Discover why 500+ processes are already automated with Ansyn.
          </p>

          <div className="hero-highlight inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">300%</p>
                <p className="text-khaki-light">Average ROI in 12 months</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">2M+</p>
                <p className="text-khaki-light">Hours saved by our clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-khaki-light">Processes automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-khaki-light text-sm uppercase tracking-widest">Scroll to explore</p>
        <svg
          className="w-6 h-6 text-khaki-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
