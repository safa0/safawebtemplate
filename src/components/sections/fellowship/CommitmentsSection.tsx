"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CommitmentsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".commitments-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".commitments-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".commitment-item", {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".commitments-list",
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
      className="commitments-section w-full bg-dark section-padding-large"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="commitments-header mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Expect
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl">
            This is a two-way investment. The programme gives a lot; it asks a
            lot.
          </p>
        </div>

        {/* Commitments List */}
        <div className="commitments-list space-y-6">
          {siteConfig.commitments.map((item, index) => (
            <div
              key={item.title}
              className="commitment-item flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
