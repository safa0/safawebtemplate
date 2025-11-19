"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function SolutionsHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".solutions-hero-title", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        ease: "power3.out",
      });

      gsap.from(".solutions-hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".solutions-hero-description", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".solutions-hero-image", {
        duration: 1.2,
        opacity: 0,
        scale: 0.95,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="solutions-hero-section relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center bg-gradient-to-b from-khaki-light to-white"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="solutions-hero-subtitle text-khaki-dark font-serif text-lg uppercase tracking-widest">
              Comprehensive Solutions
            </h2>
          </div>

          <h1 className="solutions-hero-title font-serif text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
            Our Solutions
          </h1>

          <p className="solutions-hero-description text-xl text-gray-700 leading-relaxed max-w-xl mb-8">
            From process discovery to enterprise-wide automation, Ansyn delivers end-to-end automation solutions designed to maximize ROI, minimize risk, and drive measurable business outcomes.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-serif font-bold text-earth">500+</span>
              <span className="text-sm text-gray-600">Processes Automated</span>
            </div>
            <div className="h-12 w-px bg-khaki"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-serif font-bold text-earth">2M+</span>
              <span className="text-sm text-gray-600">Hours Saved</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="solutions-hero-image relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
            alt="Automation Solutions"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
