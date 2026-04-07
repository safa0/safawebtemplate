"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CriteriaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".criteria-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".criteria-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".criteria-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".criteria-grid",
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
      className="criteria-section w-full bg-dark section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="criteria-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {siteConfig.criteria.title}
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {siteConfig.criteria.subtitle}
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="criteria-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {siteConfig.criteria.items.map((item, index) => (
            <div
              key={item.label}
              className="criteria-card p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.label}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Who this is NOT for */}
        <div className="mt-12 p-6 md:p-8 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-lg font-bold text-white/80 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Who this is NOT for
          </h3>
          <p className="text-white/40 leading-relaxed">
            {siteConfig.criteria.notFor}
          </p>
        </div>
      </div>
    </section>
  );
}
