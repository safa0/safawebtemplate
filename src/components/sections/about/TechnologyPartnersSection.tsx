"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const partners = [
  {
    name: "UiPath",
    category: "RPA Platform",
    description: "Leading enterprise RPA platform powering our automation solutions",
  },
  {
    name: "OpenAI",
    category: "AI & LLM",
    description: "Advanced AI capabilities for intelligent automation workflows",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Secure and scalable cloud infrastructure for our solutions",
  },
  {
    name: "Microsoft",
    category: "Enterprise Integration",
    description: "Deep integration with Microsoft enterprise ecosystem",
  },
  {
    name: "Salesforce",
    category: "CRM Integration",
    description: "Seamless Salesforce automation and integration capabilities",
  },
  {
    name: "Databricks",
    category: "Data & Analytics",
    description: "Advanced data processing for intelligent automation insights",
  },
];

export function TechnologyPartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".partners-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".partner-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="partners-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-khaki-light"
    >
      <div className="max-w-6xl w-full">
        <h2 className="partners-title font-serif text-5xl md:text-6xl mb-16 text-center text-earth">
          Technology Partnerships
        </h2>
        <p className="text-center text-lg text-khaki-dark mb-16 max-w-2xl mx-auto">
          We partner with industry-leading technology providers to deliver best-in-class automation solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card p-8 bg-white rounded-lg border-2 border-sand hover:border-earth hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 text-sm font-semibold text-accent uppercase tracking-wide">
                {partner.category}
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-4 group-hover:text-accent transition-colors">
                {partner.name}
              </h3>
              <p className="text-base text-khaki-dark leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
