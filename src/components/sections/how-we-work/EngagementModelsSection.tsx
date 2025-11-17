"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EngagementModel {
  title: string;
  description: string;
  bestFor: string;
  features: string[];
  timeline: string;
  investmentRange: string;
  icon: string;
}

const models: EngagementModel[] = [
  {
    title: "Project-Based",
    description: "Focused engagement for specific automation initiatives with defined scope, timeline, and deliverables",
    bestFor: "Single-process automation or discrete business initiatives",
    features: [
      "Fixed scope and budget",
      "Dedicated project team",
      "Defined success metrics",
      "Knowledge transfer included",
      "Post-launch support (30 days)",
    ],
    timeline: "6-12 weeks",
    investmentRange: "$150K - $500K",
    icon: "📋",
  },
  {
    title: "Managed Services",
    description: "Ongoing partnership with continuous automation, optimization, and support for sustained ROI",
    bestFor: "Organizations pursuing multi-process automation and continuous improvement",
    features: [
      "Monthly delivery cadence",
      "Dedicated automation team",
      "Performance monitoring",
      "Continuous optimization",
      "24/7 operational support",
    ],
    timeline: "Ongoing engagement",
    investmentRange: "$50K - $150K/month",
    icon: "🤝",
  },
  {
    title: "Center of Excellence (CoE)",
    description: "Build in-house automation capability with our strategic guidance, training, and governance framework",
    bestFor: "Enterprise organizations looking to build internal expertise and scale automation across the enterprise",
    features: [
      "CoE establishment & governance",
      "Staff training & certification",
      "Process automation framework",
      "Ongoing strategic guidance",
      "Hybrid execution model",
    ],
    timeline: "3-6 months setup",
    investmentRange: "$200K - $600K + team investment",
    icon: "🏢",
  },
];

export function EngagementModelsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".engagement-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".engagement-model-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
      });

      gsap.from(".comparison-table", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center 60%",
          end: "center 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-8 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="engagement-title text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Engagement Models
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the partnership model that aligns with your goals, timeline, and organizational readiness
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <div
              key={index}
              className="engagement-model-card group relative bg-gradient-to-br from-white to-khaki-light/20 rounded-2xl border border-khaki/20 p-8 md:p-10 hover:border-khaki hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {model.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl text-earth mb-3">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Best For */}
              <div className="bg-khaki-light/50 rounded-lg p-4 mb-6 border border-khaki/30">
                <p className="text-xs uppercase tracking-widest text-gray-700 font-bold mb-2">
                  Best For
                </p>
                <p className="text-gray-800 font-semibold text-sm">
                  {model.bestFor}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-gray-700 font-bold mb-3">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-khaki-dark font-bold mt-1">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="pt-6 border-t border-khaki/20 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-1">
                    Timeline
                  </p>
                  <p className="text-gray-800 font-semibold">
                    {model.timeline}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-1">
                    Investment Range
                  </p>
                  <p className="text-lg font-serif text-earth">
                    {model.investmentRange}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-8 px-6 py-3 bg-earth text-white font-semibold rounded-lg hover:bg-khaki-dark transition-all duration-300 text-sm uppercase tracking-widest">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="comparison-table mt-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-earth/10 to-khaki/10 border-b-2 border-khaki/30">
                  <th className="px-6 py-4 text-left font-serif text-lg text-earth">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-lg text-earth">
                    Project-Based
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-lg text-earth">
                    Managed Services
                  </th>
                  <th className="px-6 py-4 text-center font-serif text-lg text-earth">
                    CoE Setup
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-khaki/20">
                {[
                  { feature: "Fixed Scope", project: "Yes", managed: "Flexible", coe: "Flexible" },
                  { feature: "Implementation Support", project: "Included", managed: "Included", coe: "Included" },
                  { feature: "Post-Launch Support", project: "30 days", managed: "Ongoing", coe: "Ongoing" },
                  { feature: "Continuous Optimization", project: "No", managed: "Yes", coe: "Yes (in-house)" },
                  { feature: "Scalability", project: "Limited", managed: "High", coe: "Enterprise-scale" },
                  { feature: "Knowledge Transfer", project: "Basic", managed: "Ongoing", coe: "Comprehensive" },
                  { feature: "Predictable Costs", project: "Yes", managed: "Yes", coe: "With guidance" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-khaki-light/10 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.project}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.managed}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.coe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="mt-8 bg-khaki-light/20 rounded-lg p-6 border border-khaki/20">
            <p className="text-gray-700 text-center">
              Not sure which model is right for you?
              <span className="font-semibold text-earth">
                {" "}Schedule a consultation with our team to discuss your specific needs and constraints.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
