"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MetricsBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".metric-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "left 80%",
          end: "left 30%",
          scrub: 1,
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
      });

      gsap.from(".metrics-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "left 80%",
          end: "left 30%",
          scrub: 1,
        },
        x: -30,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: "87%", label: "Process Efficiency" },
    { value: "6-12mo", label: "to Full ROI" },
    { value: "40%", label: "Cost Reduction" },
    { value: "99.9%", label: "Accuracy Rate" }
  ];

  return (
    <section
      ref={sectionRef}
      className="metrics-banner w-full h-full bg-earth flex items-center justify-center px-8 md:px-20"
    >
      <div className="w-full max-w-7xl">
        <h2 className="metrics-title font-serif text-5xl md:text-6xl mb-8 text-khaki-light">
          Results That Matter
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-item text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-light mb-2 text-white">
                {metric.value}
              </div>
              <div className="text-base md:text-lg text-white/80 leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
