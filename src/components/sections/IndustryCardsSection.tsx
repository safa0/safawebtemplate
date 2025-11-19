"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { industries } from "@/data/industries";

export function IndustryCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each industry card on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
            y: 80,
            opacity: 0,
          });

          // Add hover animation context
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              overwrite: "auto",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              overwrite: "auto",
            });
          });
        }
      });

      // Animate metric counters
      gsap.from(".metric-value", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="industry-cards-section w-full py-20 px-8 bg-gradient-to-b from-white to-khaki-light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`industry-card ${industry.bgColor} rounded-2xl p-8 border-2 ${industry.accentColor} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="font-serif text-2xl md:text-3xl text-earth mb-2">
                  {industry.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {industry.description}
              </p>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="font-semibold text-earth text-sm uppercase tracking-wide mb-3">
                  Key Use Cases
                </h4>
                <ul className="space-y-2">
                  {industry.useCases.slice(0, 3).map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-khaki font-bold mt-1">→</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
                {industry.useCases.length > 3 && (
                  <p className="text-sm text-khaki-dark mt-2 font-medium">
                    +{industry.useCases.length - 3} more use cases
                  </p>
                )}
              </div>

              {/* Metrics */}
              <div className="border-t border-gray-300 pt-6">
                <h4 className="font-semibold text-earth text-sm uppercase tracking-wide mb-4">
                  Success Metrics
                </h4>
                <div className="space-y-3">
                  {industry.metrics.map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="metric-value font-serif text-lg font-bold text-khaki">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <button className="mt-6 w-full py-3 bg-earth text-white rounded-lg font-medium hover:bg-khaki-dark transition-colors duration-300 flex items-center justify-center gap-2">
                Explore This Industry
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
