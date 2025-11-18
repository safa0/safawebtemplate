"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Step {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Discover",
    subtitle: "Process Mining & Analysis",
    description: "We conduct a comprehensive analysis of your current processes to identify automation opportunities, map workflows, and quantify potential ROI.",
    details: [
      "Process mapping and analysis",
      "Bottleneck identification",
      "ROI and cost-benefit analysis",
      "Risk assessment and mitigation planning",
      "Business case development",
    ],
    icon: "🔍",
    color: "from-khaki to-khaki-dark",
  },
  {
    number: 2,
    title: "Design",
    subtitle: "Blueprint & Architecture",
    description: "Our architects design a tailored automation blueprint that aligns with your enterprise infrastructure, security requirements, and business objectives.",
    details: [
      "Solution architecture design",
      "Technology stack selection",
      "Integration point mapping",
      "Security and compliance planning",
      "Scalability framework",
    ],
    icon: "🏗️",
    color: "from-earth to-accent",
  },
  {
    number: 3,
    title: "Develop",
    subtitle: "Build & Test",
    description: "Our expert developers build your automation solution using industry best practices, with rigorous testing and quality assurance at every step.",
    details: [
      "RPA bot development",
      "AI agent integration",
      "Unit and integration testing",
      "Performance optimization",
      "Security hardening",
    ],
    icon: "⚙️",
    color: "from-sand to-khaki-dark",
  },
  {
    number: 4,
    title: "Deploy",
    subtitle: "Implementation & Go-Live",
    description: "We orchestrate a seamless transition to production with minimal business disruption, comprehensive staff training, and change management support.",
    details: [
      "Production environment setup",
      "Data migration and validation",
      "Comprehensive staff training",
      "Change management execution",
      "Go-live support (24/7)",
    ],
    icon: "🚀",
    color: "from-earth to-earth",
  },
  {
    number: 5,
    title: "Deliver",
    subtitle: "Optimization & Support",
    description: "We provide ongoing support and optimization to ensure your automation delivers sustained value and continues to evolve with your business needs.",
    details: [
      "Performance monitoring and reporting",
      "Continuous optimization",
      "Proactive issue management",
      "Regular health checks and updates",
      "Long-term strategic partnership",
    ],
    icon: "📊",
    color: "from-khaki to-sand",
  },
];

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".methodology-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 5%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
      });

      // Timeline vertical line animation
      gsap.to(".timeline-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        },
        height: "100%",
        opacity: 1,
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
        <div className="methodology-title text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Our 5-Step Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach proven to deliver measurable results and sustainable transformation
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-b from-khaki-dark to-earth rounded-full timeline-line" />

          {/* Steps Grid */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`step-card group relative ${
                  index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                }`}
              >
                <div className="md:w-1/2">
                  {/* Step Card */}
                  <div className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 transform origin-left md:origin-center`}>
                    {/* Step Number and Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{step.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm uppercase tracking-widest opacity-90 font-semibold">
                          Step {step.number}
                        </div>
                        <h3 className="font-serif text-4xl leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg font-semibold opacity-95 mb-4">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base opacity-90 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3 bg-white/10 backdrop-blur rounded-lg p-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-khaki-light text-lg mt-0.5">✓</span>
                          <p className="text-sm font-medium leading-tight">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-earth rounded-full z-10" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call-to-Action */}
          <div className="mt-16 md:mt-24 text-center bg-khaki-light/30 rounded-2xl p-12 border border-khaki/20">
            <h3 className="font-serif text-3xl md:text-4xl text-earth mb-4">
              Each Step Builds on the Last
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our methodology ensures comprehensive planning, flawless execution, and lasting success. We don&apos;t just implement automation&mdash;we transform your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
