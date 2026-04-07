"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    label: "Bootcamps",
    comparison: "You pay $8\u201316k. Generic curriculum. No selectivity.",
    us: "We pay you $200/month. Curated path. Highly selective.",
  },
  {
    label: "Corporate PhD Fellowships",
    comparison: "PhD-only. University-partnered. Inaccessible.",
    us: "Open to any STEM graduate. No PhD required. Global.",
  },
  {
    label: "Free Fellowships",
    comparison: "No cost, but no stipend. No financial commitment either way.",
    us: "Micro-stipend signals seriousness from both sides.",
  },
  {
    label: "Master\u2019s in ML",
    comparison: "$30\u201380k tuition. 1\u20132 years. Academic focus.",
    us: "No tuition. 3\u201312 months. Job-readiness focus.",
  },
  {
    label: "Regional Programmes",
    comparison: "Geographically locked. India, Nigeria, or Africa only.",
    us: "Global from day one. Bogot\u00e1 to Dhaka.",
  },
  {
    label: "Self-study",
    comparison: "No accountability, no mentorship, no portfolio guidance.",
    us: "Structured mentorship, monthly deliverables, career support.",
  },
];

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".diff-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".diff-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".diff-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".diff-grid",
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
      className="w-full bg-khaki-light section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        <div className="diff-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            No existing programme combines all five of our properties: non-CS
            STEM focus, micro-stipend, tiered commitment, global reach, and
            venture framing.
          </p>
        </div>

        <div className="diff-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="diff-card p-8 rounded-2xl bg-white border border-earth/10 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-dark mb-4">
                vs. {item.label}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-sm text-dark/50">
                    {item.comparison}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent"
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
                  <span className="text-sm text-dark/80 font-medium">
                    {item.us}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
