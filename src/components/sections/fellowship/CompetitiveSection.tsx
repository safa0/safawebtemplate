"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CompetitiveSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".competitive-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".competitive-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".competitive-table", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".competitive-table",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".differentiator-item", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".differentiators-list",
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
      className="competitive-section w-full bg-white section-padding-large"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="competitive-header text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            {siteConfig.competitiveLandscape.title}
          </h2>
          <p className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto">
            {siteConfig.competitiveLandscape.subtitle}
          </p>
        </div>

        {/* Five Differentiators */}
        <div className="differentiators-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {siteConfig.competitiveLandscape.differentiators.map(
            (item, index) => (
              <div
                key={`diff-${index}`}
                className="differentiator-item p-4 rounded-xl bg-khaki-light/60 border border-earth/10 hover:bg-khaki-light transition-colors duration-300 flex items-start gap-3"
              >
                <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-dark/70 leading-relaxed">{item}</p>
              </div>
            )
          )}
        </div>

        {/* Comparison Table — Card Style */}
        <div className="competitive-table">
          <h3 className="text-lg font-bold text-dark mb-4 text-center">
            How we compare
          </h3>
          <div className="space-y-2">
            {siteConfig.competitiveLandscape.comparison.map((row) => {
              const isUs = "isUs" in row && row.isUs;
              return (
                <div
                  key={row.programme}
                  className={`rounded-xl p-5 md:p-6 transition-all duration-300 ${
                    isUs
                      ? "bg-dark text-white ring-2 ring-accent shadow-lg"
                      : "bg-khaki-light/40 hover:bg-khaki-light/70 border border-earth/5"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    {/* Programme name */}
                    <div className="md:w-1/4 flex items-center gap-2">
                      {isUs && (
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      )}
                      <span
                        className={`font-bold text-sm ${
                          isUs ? "text-accent" : "text-dark"
                        }`}
                      >
                        {row.programme}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="md:w-1/4 flex items-center gap-4 text-xs">
                      <span
                        className={`px-2 py-1 rounded ${
                          isUs
                            ? "bg-white/10 text-white/70"
                            : "bg-white text-dark/50"
                        }`}
                      >
                        {row.target}
                      </span>
                      <span className={isUs ? "text-white/50" : "text-dark/40"}>
                        {row.stipend}
                      </span>
                      <span className={isUs ? "text-white/50" : "text-dark/40"}>
                        {row.duration}
                      </span>
                    </div>

                    {/* Difference */}
                    <div className="md:w-1/2">
                      <p
                        className={`text-sm leading-relaxed ${
                          isUs ? "text-white/70" : "text-dark/60"
                        }`}
                      >
                        {row.difference}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
