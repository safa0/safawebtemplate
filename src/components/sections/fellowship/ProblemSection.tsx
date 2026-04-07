"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(".problem-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".problem-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Statement reveal
      gsap.from(".problem-statement", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".problem-statement",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Stat cards stagger
      gsap.from(".problem-stat", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".problem-stats",
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
      className="problem-section w-full bg-midnight section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Thesis */}
          <div>
            <h2 className="problem-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {siteConfig.problem.title}
            </h2>
            <p className="problem-statement text-lg md:text-xl text-white/60 leading-relaxed">
              {siteConfig.problem.statement}
            </p>
          </div>

          {/* Right: Stats */}
          <div className="problem-stats flex flex-col gap-6">
            {siteConfig.problem.points.map((point, index) => (
              <div
                key={`problem-stat-${index}`}
                className="problem-stat p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-coral mb-2">
                  {point.stat}
                </div>
                <div className="text-base md:text-lg text-white/60">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
