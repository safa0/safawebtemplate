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
    name: "TinySentinel SDK",
    description: "Embeddable IDS runtime optimized for microcontroller-class hardware",
    color: "bg-amber-50",
    features: ["<256 KB footprint target", "Deterministic latency", "Telemetry-light logging", "Failsafe behaviors"],
  },
  {
    name: "Feature Lab",
    description: "Protocol-aware feature engineering tuned for IIoT traffic and sensor data",
    color: "bg-blue-50",
    features: ["Protocol-specific featurization", "Quantization-aware training", "Attack replay datasets", "Privacy-first processing"],
  },
  {
    name: "Validation Suite",
    description: "Hardware-in-the-loop testing, attack simulation, and dashboards for operators",
    color: "bg-green-50",
    features: ["Attack scenario playbooks", "Latency/energy profiling", "Alert dashboards", "Compliance evidence packs"],
  },
];

export function TechnologyStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            Technology We Deliver
          </h2>
          <p className="text-xl text-gray-600">
            Our stack keeps ML-based intrusion detection ultra-lightweight while fitting industrial requirements.
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
                {platform.features.map((feature) => (
                  <div
                    key={feature}
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
            Built for Constrained Hardware
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We prioritize MCU realities—limited RAM/flash, tight timing, and intermittent connectivity. Every component is designed for privacy-first, low-energy, real-time operation so security doesn&apos;t sacrifice uptime.
          </p>
        </div>
      </div>
    </section>
  );
}
