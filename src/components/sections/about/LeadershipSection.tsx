"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".founder-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white section-padding-large"
    >
      <div className="max-w-4xl mx-auto">
        <div className="founder-content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-8">
            The Founder
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Geometric avatar placeholder */}
            <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-dark overflow-hidden relative">
              {/* Grid pattern inside */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `linear-gradient(rgba(233,69,96,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(233,69,96,0.5) 1px, transparent 1px)`,
                backgroundSize: '12px 12px',
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-white/20 font-mono">&lambda;</span>
              </div>
            </div>

            <div className="space-y-4 text-dark/60 leading-relaxed flex-1">
              <p className="text-lg">
                The person behind [Programme Name] believes that the best AI
                talent won&apos;t come from traditional CS programmes
                alone&mdash;it will come from scientists and engineers who bring
                deep domain expertise to machine learning.
              </p>
              <p>
                This programme exists because the founder saw the same pattern
                repeatedly: brilliant STEM graduates stuck in career limbo,
                knowing AI was the future but having no structured path to get
                there. The bridge from STEM to AI is short. Someone just needed
                to build it.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-khaki-light rounded-full text-sm text-dark/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Full bio coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
