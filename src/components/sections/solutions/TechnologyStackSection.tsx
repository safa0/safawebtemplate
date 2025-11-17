"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RpaPlatform {
  name: string;
  description: string;
  color: string;
  features: string[];
}

const rpaPlatforms: RpaPlatform[] = [
  {
    name: "UiPath",
    description: "Cloud-native RPA platform for enterprise automation",
    color: "bg-blue-50",
    features: ["Low-code design", "AI-powered", "Cloud-native", "Enterprise scale"],
  },
  {
    name: "Blue Prism",
    description: "Intelligent automation platform with secure architecture",
    color: "bg-indigo-50",
    features: ["Secure infrastructure", "Digital workforce", "Process analytics", "Compliance ready"],
  },
  {
    name: "Automation Anywhere",
    description: "Intelligent RPA platform with cognitive AI integration",
    color: "bg-purple-50",
    features: ["Cognitive AI", "Bot marketplace", "Cloud and on-prem", "Advanced analytics"],
  },
];

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".tech-stack-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".rpa-platform-card", {
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

      gsap.from(".platform-feature", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        x: -30,
        opacity: 0,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="technology-stack-section relative py-24 px-6 md:px-12 bg-gradient-to-b from-white to-khaki-light/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="tech-stack-title font-serif text-5xl md:text-6xl text-earth mb-4">
            RPA Platforms We Master
          </h2>
          <p className="text-xl text-gray-600">
            Our team has deep expertise in the leading enterprise automation platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {rpaPlatforms.map((platform) => (
            <div
              key={platform.name}
              className={`rpa-platform-card p-8 rounded-2xl shadow-lg ${platform.color} hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Platform Badge */}
              <div className="mb-6">
                <h3 className="font-serif text-3xl font-bold text-earth">
                  {platform.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {platform.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-earth uppercase tracking-wide">
                  Key Features
                </p>
                {platform.features.map((feature, index) => (
                  <div
                    key={index}
                    className="platform-feature flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-khaki flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-8 w-full px-6 py-3 bg-earth text-white rounded-lg font-medium hover:bg-khaki-dark transition-colors duration-300">
                Learn&nbsp;More
              </button>
            </div>
          ))}
        </div>

        {/* Integration Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-khaki-light">
          <h3 className="font-serif text-2xl text-earth mb-4">
            Multi-Platform Expertise
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We don&apos;t limit ourselves to a single platform. Our agnostic approach means we select the best tool for your specific business needs, whether you require on-premise deployment, cloud-native solutions, or a hybrid approach. Our architects evaluate your requirements against platform capabilities to ensure optimal fit, cost-efficiency, and long-term scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
