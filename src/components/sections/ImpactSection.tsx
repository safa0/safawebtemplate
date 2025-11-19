"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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

  const quickMetrics = siteConfig.metrics.quickMetrics;
  const metrics = siteConfig.metrics.detailedMetrics;

  return (
    <section
      ref={sectionRef}
      className="impact-section w-full min-h-screen bg-earth py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="impact-title font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-8 sm:mb-10 md:mb-16 text-white leading-tight">
          Results That Matter
        </h2>

        {/* Quick Metrics Banner */}
        <div className="mb-8 sm:mb-10 md:mb-16 pb-6 sm:pb-8 md:pb-16 border-b border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {quickMetrics.map((metric) => (
              <div
                key={metric.id}
                className="impact-metric text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light mb-1 sm:mb-2 md:mb-3 text-khaki-light">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/80 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8 mb-8 sm:mb-10 md:mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="impact-metric bg-white/10 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-500"
            >
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-2 sm:mb-3 md:mb-4 text-khaki-light">
                {metric.value}
              </div>
              <h3 className="text-base sm:text-lg md:text-2xl font-medium mb-1 sm:mb-2 text-white leading-tight">
                {metric.label}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch sm:items-center justify-center sm:justify-start">
          <Link
            href="/why-automate"
            className="group inline-flex items-center justify-center gap-2 bg-white text-earth px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-khaki-light transition-colors w-full sm:w-auto"
          >
            <span>See Full ROI Analysis</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/industries"
            className="group inline-flex items-center justify-center gap-2 text-white text-sm sm:text-base md:text-lg font-medium hover:gap-4 transition-all w-full sm:w-auto"
          >
            <span>View Industry Examples</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
