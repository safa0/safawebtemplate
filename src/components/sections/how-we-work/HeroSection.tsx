"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Load animations
      const hasIntroPlayed = typeof window !== "undefined"
        ? sessionStorage.getItem("introAnimationPlayed")
        : true;

      const delay = hasIntroPlayed ? 0 : 3;

      gsap.from(".hww-hero-title", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: delay + 0.2,
        ease: "power3.out",
      });

      gsap.from(".hww-hero-description", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: delay + 0.4,
        ease: "power3.out",
      });

      gsap.from(".hww-hero-cards", {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        delay: delay + 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-8 md:px-20 bg-gradient-to-br from-khaki-light/30 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="hww-hero-title font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-earth">
            Our Proven Methodology
          </h1>

          <p className="hww-hero-description text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            We follow a structured, battle-tested 5-step methodology that transforms your operations from concept to sustained success. Each phase is carefully designed to maximize ROI, minimize risk, and ensure lasting impact.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="hww-hero-cards bg-white border border-khaki/20 rounded-2xl p-8 text-center hover:border-khaki hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-serif text-khaki mb-3">95%</div>
            <p className="text-gray-700 font-semibold">Success Rate</p>
            <p className="text-sm text-gray-600 mt-2">On-time project delivery and adoption</p>
          </div>

          <div className="hww-hero-cards bg-white border border-khaki/20 rounded-2xl p-8 text-center hover:border-khaki hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-serif text-earth mb-3">6-12</div>
            <p className="text-gray-700 font-semibold">Weeks Average</p>
            <p className="text-sm text-gray-600 mt-2">Full implementation from discovery to go-live</p>
          </div>

          <div className="hww-hero-cards bg-white border border-khaki/20 rounded-2xl p-8 text-center hover:border-khaki hover:shadow-lg transition-all duration-300">
            <div className="text-4xl font-serif text-accent mb-3">300%</div>
            <p className="text-gray-700 font-semibold">Average ROI</p>
            <p className="text-sm text-gray-600 mt-2">Achieved within first year of deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
