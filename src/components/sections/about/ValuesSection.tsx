"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in automation, leveraging the latest AI and RPA technologies to deliver cutting-edge solutions.",
    icon: "🚀",
  },
  {
    title: "Excellence",
    description: "Every project receives our unwavering commitment to quality, precision, and delivering results that exceed expectations.",
    icon: "⭐",
  },
  {
    title: "Partnership",
    description: "We view our clients as partners. Your success is our success, and we're committed to your long-term transformation journey.",
    icon: "🤝",
  },
  {
    title: "Results",
    description: "We measure ourselves by the tangible impact we deliver. ROI, efficiency gains, and operational excellence are at the heart of everything we do.",
    icon: "📈",
  },
];

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".values-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="values-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="values-title font-serif text-5xl md:text-6xl mb-16 text-center text-earth">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="value-card p-8 md:p-12 bg-khaki-light rounded-lg border-2 border-khaki hover:border-earth transition-colors duration-300"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-3xl font-semibold text-earth mb-4">{value.title}</h3>
              <p className="text-lg text-khaki-dark leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
