"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

export function EligibilitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animate-in");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="eligibility-section w-full bg-dark section-padding-large"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="eligibility-fade text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {siteConfig.eligibility.title}
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {siteConfig.eligibility.subtitle}
          </p>
        </div>

        {/* Eligibility List */}
        <ul className="space-y-4">
          {siteConfig.eligibility.items.map((item, index) => (
            <li
              key={item.label}
              className="eligibility-fade flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-accent"
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
              </div>
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-sm text-white/40 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
