"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function ApplicationStepsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".step-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-container",
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight mb-4 text-center">
          {siteConfig.applicationProcess.title}
        </h2>
        <p className="text-lg text-midnight/60 mb-16 text-center max-w-2xl mx-auto">
          {siteConfig.applicationProcess.subtitle}
        </p>

        <div className="steps-container relative">
          {/* Vertical line */}
          <div className="step-line absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-midnight to-coral" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {siteConfig.applicationProcess.steps.map((step) => (
              <div
                key={step.number}
                className="step-card relative flex items-start gap-6 md:gap-8"
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border-2 border-coral text-coral font-bold text-sm md:text-base">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3 className="text-xl md:text-2xl font-bold text-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-midnight/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
