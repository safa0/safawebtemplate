"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SuccessFactor {
  title: string;
  description: string;
  elements: string[];
  icon: string;
}

const factors: SuccessFactor[] = [
  {
    title: "Executive Sponsorship",
    description: "Strong leadership commitment ensures organizational alignment, removes barriers, and drives adoption",
    elements: [
      "C-level executive champion",
      "Budget authorization",
      "Cross-functional collaboration",
      "Change leadership",
    ],
    icon: "👔",
  },
  {
    title: "Clear Vision & Goals",
    description: "Well-defined objectives with measurable metrics guide decision-making and demonstrate ROI",
    elements: [
      "SMART goals definition",
      "Success metrics identified",
      "Business case validated",
      "Stakeholder alignment",
    ],
    icon: "🎯",
  },
  {
    title: "Change Management",
    description: "Proactive people management ensures smooth adoption and maximizes benefits realization",
    elements: [
      "Communication strategy",
      "Training programs",
      "Resistance management",
      "Continuous feedback loops",
    ],
    icon: "🔄",
  },
  {
    title: "Process Optimization",
    description: "Automating broken processes amplifies problems. Process improvement comes first",
    elements: [
      "Process assessment",
      "Redesign where needed",
      "Exception handling",
      "Performance monitoring",
    ],
    icon: "⚡",
  },
  {
    title: "Governance & Controls",
    description: "Proper governance framework ensures compliance, security, and sustainable operations",
    elements: [
      "Access control policies",
      "Audit trails",
      "Exception handling",
      "Continuous monitoring",
    ],
    icon: "🛡️",
  },
  {
    title: "Skilled Team & Support",
    description: "Having the right expertise and ongoing support ensures success and continuous improvement",
    elements: [
      "Certified automation experts",
      "Dedicated support team",
      "Knowledge base",
      "Regular health checks",
    ],
    icon: "👥",
  },
];

export function SuccessFactorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".success-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".success-factor-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 5%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
      });

      gsap.from(".success-highlight", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center 60%",
          end: "center 30%",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.95,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-8 md:px-20 bg-gradient-to-br from-khaki-light/20 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="success-title text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            6 Critical Success Factors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These elements separate successful transformations from failed projects. We integrate them throughout every phase.
          </p>
        </div>

        {/* Factors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="success-factor-card group bg-white rounded-2xl border border-khaki/20 p-8 hover:border-khaki hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {factor.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-earth mb-3">
                {factor.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {factor.description}
              </p>

              {/* Elements */}
              <ul className="space-y-2">
                {factor.elements.map((element, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-khaki-dark text-lg">✓</span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {element}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success Highlight Box */}
        <div className="success-highlight bg-gradient-to-r from-earth via-khaki-dark to-earth rounded-2xl p-12 md:p-16 text-white border border-khaki/30">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-4xl mb-6 leading-tight">
                Why These Factors Matter
              </h3>
              <p className="text-khaki-light text-lg leading-relaxed mb-6">
                Automation technology is only 30% of a successful transformation. The remaining 70% comes from people, processes, and proper governance. We&apos;ve learned this through hundreds of implementations, and it&apos;s embedded in our methodology.
              </p>
              <p className="text-khaki-light/90 text-base">
                We don&apos;t just implement automation&mdash;we guide you through organizational change to ensure sustained success and competitive advantage.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <p className="text-3xl font-bold mb-2">95%</p>
                <p className="text-khaki-light text-sm">
                  Of our successful projects had strong executive sponsorship
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <p className="text-3xl font-bold mb-2">88%</p>
                <p className="text-khaki-light text-sm">
                  Achieved or exceeded ROI targets with proper change management
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <p className="text-3xl font-bold mb-2">92%</p>
                <p className="text-khaki-light text-sm">
                  User adoption rate when all success factors are in place
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="mt-16 bg-white rounded-xl border border-khaki/20 p-8 md:p-12">
          <h3 className="font-serif text-3xl text-earth mb-8">
            Our Approach to Success
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-earth mb-4 flex items-center gap-3">
                <span className="text-2xl">📊</span> Pre-Implementation
              </h4>
              <ul className="space-y-3">
                {[
                  "Comprehensive readiness assessment",
                  "Stakeholder interviews and alignment",
                  "Organization design and restructuring (if needed)",
                  "Training plan development",
                  "Governance framework establishment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-earth mb-4 flex items-center gap-3">
                <span className="text-2xl">🚀</span> During & After
              </h4>
              <ul className="space-y-3">
                {[
                  "Weekly steering committee meetings",
                  "Real-time change impact management",
                  "Escalation and issue resolution",
                  "Continuous training and support",
                  "Post-go-live optimization reviews",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
