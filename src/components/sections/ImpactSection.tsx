"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".impact-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".impact-metric", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quickMetrics = [
    { value: "87%", label: "Process Efficiency" },
    { value: "6-12mo", label: "to Full ROI" },
    { value: "40%", label: "Cost Reduction" },
    { value: "99.9%", label: "Accuracy Rate" }
  ];

  const metrics = [
    {
      value: "87%",
      label: "Average Process Efficiency Gain",
      description: "Across all implementations"
    },
    {
      value: "6-12",
      label: "Months to Full ROI",
      description: "Typical payback period"
    },
    {
      value: "40%",
      label: "Reduction in Operational Costs",
      description: "Within first year"
    },
    {
      value: "99.9%",
      label: "Automation Accuracy",
      description: "Error-free execution"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="impact-section w-full min-h-screen bg-earth py-20 px-8 md:px-20 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="impact-title font-serif text-6xl md:text-7xl mb-16 text-white">
          Results That Matter
        </h2>

        {/* Quick Metrics Banner */}
        <div className="mb-16 pb-16 border-b border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickMetrics.map((metric, index) => (
              <div
                key={index}
                className="impact-metric text-center"
              >
                <div className="text-5xl md:text-6xl font-light mb-3 text-khaki-light">
                  {metric.value}
                </div>
                <div className="text-lg md:text-xl text-white/80">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="impact-metric bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-500"
            >
              <div className="text-6xl md:text-7xl font-light mb-4 text-khaki-light">
                {metric.value}
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-2 text-white">
                {metric.label}
              </h3>
              <p className="text-white/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link
            href="/why-automate"
            className="group inline-flex items-center gap-2 bg-white text-earth px-8 py-4 rounded-lg text-lg font-medium hover:bg-khaki-light transition-colors"
          >
            <span>See Full ROI Analysis</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-white text-lg font-medium hover:gap-4 transition-all"
          >
            <span>View Industry Examples</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
