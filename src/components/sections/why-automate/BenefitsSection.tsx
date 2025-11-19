"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { benefits } from "@/data/benefits";

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefits-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".benefit-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="benefits-section w-full py-20 md:py-32 px-8 md:px-20 bg-khaki-light/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="benefits-title mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-earth mb-4">
            Six Key Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intelligent automation transforms every aspect of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card bg-white rounded-2xl p-8 md:p-10 border border-khaki/20 hover:border-khaki hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-earth mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <ul className="space-y-3">
                {benefit.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Integration highlight */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-earth to-khaki-dark rounded-2xl p-12 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">
                Unified Benefits
              </h3>
              <p className="text-lg text-khaki-light leading-relaxed mb-6">
                These benefits don&apos;t exist in isolation. Cost reduction enables reinvestment in employee development. Improved accuracy builds customer trust. Greater capacity allows strategic focus. The synergistic effect creates exponential business value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold mb-2">6-9 mo</p>
                <p className="text-sm text-khaki-light">Break-even point</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold mb-2">5+ yrs</p>
                <p className="text-sm text-khaki-light">Long-term value</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold mb-2">∞</p>
                <p className="text-sm text-khaki-light">Scalability</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold mb-2">100%</p>
                <p className="text-sm text-khaki-light">Process improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
