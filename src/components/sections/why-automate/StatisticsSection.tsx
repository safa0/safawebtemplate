"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Statistic {
  value: number;
  unit: string;
  label: string;
  description: string;
}

const statistics: Statistic[] = [
  {
    value: 300,
    unit: "%",
    label: "Average ROI",
    description: "Return on investment within 12 months",
  },
  {
    value: 50,
    unit: "%",
    label: "Manual Work Reduction",
    description: "40-60% reduction in manual processes",
  },
  {
    value: 95,
    unit: "%",
    label: "Error Reduction",
    description: "Elimination of human errors and compliance issues",
  },
  {
    value: 10,
    unit: "x",
    label: "Capacity Increase",
    description: "Processing capacity multiplication",
  },
];

function AnimatedCounter({ value, unit }: { value: number; unit: string }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hasScrolled = elementRef.current?.closest("section");

      gsap.from(elementRef.current, {
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          onEnter: () => {
            // Only animate once when entering viewport
            if (!elementRef.current?.classList.contains("animated")) {
              elementRef.current?.classList.add("animated");

              const obj = { value: 0 };
              gsap.to(obj, {
                value: value,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                  if (elementRef.current) {
                    elementRef.current.textContent = `${Math.ceil(obj.value)}${unit}`;
                  }
                },
              });
            }
          },
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [value, unit]);

  return (
    <div
      ref={elementRef}
      className="text-5xl md:text-6xl lg:text-7xl font-bold text-earth"
    >
      {value}
      {unit}
    </div>
  );
}

export function StatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="statistics-section w-full py-20 md:py-32 px-8 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="stats-title mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-earth mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients experience measurable improvements across all key metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-khaki-light/30 rounded-2xl p-8 md:p-12 border border-khaki/20 hover:border-khaki hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <AnimatedCounter value={stat.value} unit={stat.unit} />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-earth mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-earth/5 to-khaki/5 rounded-2xl border border-earth/10 p-8 md:p-12">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            <span className="font-semibold text-earth">Real Impact:</span> Organizations that implement intelligent automation see productivity gains within the first month and break-even within 6-9 months. The benefits compound over time as automation spreads across your organization.
          </p>
        </div>
      </div>
    </section>
  );
}
