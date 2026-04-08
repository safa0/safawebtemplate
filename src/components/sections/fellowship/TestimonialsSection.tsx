"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".launch-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".launch-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-section w-full bg-khaki-light section-padding-large"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="testimonials-header text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Fellow Stories
          </h2>
          <p className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto">
            We&apos;re building the first cohort now. Their stories will live
            here.
          </p>
        </div>

        {/* Launching Soon Card */}
        <div className="launch-card relative p-10 md:p-14 rounded-2xl bg-white border border-earth/10 text-center overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3E3426 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Launching 2026
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Be among the first fellows
            </h3>

            <p className="text-dark/50 max-w-lg mx-auto mb-8 leading-relaxed">
              The inaugural cohort is forming now. Apply to be one of the first
              people to make the STEM-to-AI transition through this programme.
              Your story starts here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply"
                className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                Apply Now
              </Link>
              <span className="text-sm text-dark/30">
                Rolling admissions &middot; No deadline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
