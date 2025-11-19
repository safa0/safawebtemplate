"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { methodologySteps as steps } from "@/data/methodology";

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".methodology-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 5%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
      });

      // Timeline vertical line animation
      gsap.to(".timeline-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        },
        height: "100%",
        opacity: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-8 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="methodology-title text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Our 5-Step Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach proven to deliver measurable results and sustainable transformation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-b from-khaki-dark to-earth rounded-full timeline-line" />

          {/* Steps Grid */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={`step-${step.number}`}
                className={`step-card group relative ${
                  index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                }`}
              >
                <div className="md:w-1/2">
                  {/* Step Card */}
                  <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform origin-left md:origin-center`}>
                    {/* Step Number */}
                    <div className="mb-6">
                      <div className="text-sm uppercase tracking-widest opacity-90 font-semibold">
                        Step {step.number}
                      </div>
                      <h3 className="font-serif text-4xl leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg font-semibold opacity-95 mb-4">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base opacity-90 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3 bg-white/10 backdrop-blur rounded-lg p-4">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <span className="text-khaki-light text-lg mt-0.5">✓</span>
                          <p className="text-sm font-medium leading-tight">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-earth rounded-full z-10" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call-to-Action */}
          <div className="mt-16 md:mt-24 text-center bg-khaki-light/30 rounded-2xl p-12 border border-khaki/20">
            <h3 className="font-serif text-3xl md:text-4xl text-earth mb-4">
              Each Step Builds on the Last
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our methodology ensures comprehensive planning, flawless execution, and lasting success. We don&apos;t just implement automation&mdash;we transform your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
