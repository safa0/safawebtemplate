"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function TiersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tiers-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".tiers-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".tier-card", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".tier-cards",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate the connecting line
      gsap.from(".tier-connector", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tier-cards",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tierColors = [
    { bg: "bg-coral/5", border: "border-coral/20", accent: "text-coral" },
    {
      bg: "bg-midnight/5",
      border: "border-midnight/20",
      accent: "text-midnight",
    },
    { bg: "bg-coral/5", border: "border-coral/20", accent: "text-coral" },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="tiers-section w-full bg-ice section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="tiers-header text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-midnight/60 max-w-2xl mx-auto">
            Every fellow starts at Tier 1. Progression is earned. Think of it
            like funding rounds: demonstrate traction, unlock the next stage.
          </p>
        </div>

        {/* Connecting line (desktop) */}
        <div className="hidden lg:block relative mb-4">
          <div className="tier-connector absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-coral via-midnight to-coral" />
        </div>

        {/* Tier Cards */}
        <div className="tier-cards grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.tiers.map((tier, index) => {
            const colors = tierColors[index];
            return (
              <div
                key={tier.name}
                className={`tier-card relative p-8 md:p-10 rounded-2xl ${colors.bg} border ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                {/* Tier number */}
                <div
                  className={`text-sm font-bold ${colors.accent} mb-4 tracking-wider uppercase`}
                >
                  Tier {index + 1}
                </div>

                {/* Name & Duration */}
                <h3 className="text-2xl md:text-3xl font-bold text-midnight mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-midnight/60">{tier.duration}</span>
                  <span className="text-midnight/30">&middot;</span>
                  <span className="text-midnight/60">{tier.stipend}</span>
                </div>

                {/* Total investment badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-6">
                  <span className={`text-sm font-bold ${colors.accent}`}>
                    {tier.total}
                  </span>
                  <span className="text-xs text-midnight/40">
                    total investment
                  </span>
                </div>

                {/* Description */}
                <p className="text-midnight/60 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {tier.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-midnight/70"
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.accent}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Arrow indicator between cards (desktop) */}
                {index < siteConfig.tiers.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full items-center justify-center shadow-md">
                    <svg
                      className="w-4 h-4 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
