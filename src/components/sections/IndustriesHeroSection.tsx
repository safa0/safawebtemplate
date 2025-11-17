"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Heading animation
      gsap.from(".industries-hero-heading", {
        duration: 1.2,
        opacity: 0,
        y: 40,
        ease: "power3.out",
      });

      // Subtitle animation
      gsap.from(".industries-hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.3,
        ease: "power3.out",
      });

      // Description animation
      gsap.from(".industries-hero-description", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.5,
        ease: "power3.out",
      });

      // Scroll trigger animation for parallax effect
      gsap.to(".industries-hero-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 50,
        opacity: 0.7,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries-hero-section w-full min-h-screen flex items-center justify-center px-8 py-20 bg-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-khaki-light rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sand rounded-full blur-3xl opacity-20 -z-10" />

      <div className="industries-hero-content max-w-4xl mx-auto text-center z-10">
        <h1 className="industries-hero-heading font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-earth">
          Industries We Serve
        </h1>

        <p className="industries-hero-subtitle text-xl md:text-2xl text-khaki-dark mb-8">
          Sector-specific expertise in enterprise automation
        </p>

        <p className="industries-hero-description text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We deliver industry-tailored automation solutions with deep domain knowledge.
          From financial services to healthcare, manufacturing to retail, our proven
          methodologies drive measurable ROI across sectors.
        </p>
      </div>
    </section>
  );
}
