"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Main heading animation
      gsap.from(".industries-cta-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });

      // Subheading animation
      gsap.from(".industries-cta-subheading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      // Button animation
      gsap.from(".industries-cta-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
      });

      // Feature list animation
      gsap.from(".cta-feature", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 25%",
          scrub: 1,
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industries-cta-section w-full py-20 px-8 bg-gradient-to-b from-khaki-light to-sand relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-khaki rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-earth rounded-full blur-3xl opacity-10 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="industries-cta-heading font-serif text-4xl md:text-5xl lg:text-6xl text-earth mb-6 leading-tight">
          Don&apos;t See Your Industry?
        </h2>

        {/* Subheading */}
        <p className="industries-cta-subheading text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Our automation expertise spans across all sectors. Let&apos;s explore how we can
          transform your specific operations with custom automation solutions.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="cta-feature bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-serif text-lg text-earth mb-2">Custom Assessment</h4>
            <p className="text-sm text-gray-600">
              Industry-specific automation opportunities analysis
            </p>
          </div>

          <div className="cta-feature bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">⚙️</div>
            <h4 className="font-serif text-lg text-earth mb-2">Tailored Solutions</h4>
            <p className="text-sm text-gray-600">
              Automation blueprints designed for your sector
            </p>
          </div>

          <div className="cta-feature bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-serif text-lg text-earth mb-2">Proven ROI</h4>
            <p className="text-sm text-gray-600">
              Track record of measurable results in your industry
            </p>
          </div>
        </div>

        {/* Primary CTA Button */}
        <button className="industries-cta-button px-10 py-4 bg-earth text-white rounded-full font-semibold text-lg hover:bg-khaki-dark hover:-translate-y-1 transition-all duration-300 shadow-lg inline-flex items-center gap-3 mb-8">
          Schedule Your Free Industry Consultation
          <span>→</span>
        </button>

        {/* Secondary Info */}
        <p className="text-gray-600">
          Get a personalized assessment of automation opportunities for your business.
          No obligation, just actionable insights.
        </p>
      </div>
    </section>
  );
}
