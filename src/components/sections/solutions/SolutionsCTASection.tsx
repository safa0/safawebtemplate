"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function SolutionsCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".solutions-cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".solutions-cta-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
      });

      gsap.from(".solutions-cta-feature", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        x: -40,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="solutions-cta-section relative py-24 px-6 md:px-12 bg-gradient-to-r from-earth via-khaki to-sand"
    >
      <div className="max-w-5xl mx-auto">
        <div className="solutions-cta-content text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Ready to Secure Your Devices?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our team will map threats, hardware limits, and compliance needs to a TinySentinel deployment plan for your IIoT fleet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="solutions-cta-feature bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-serif text-xl text-white mb-2">Discovery Session</h3>
            <p className="text-white/80 text-sm">
              No obligation review of devices, protocols, and regulatory context
            </p>
          </div>

          <div className="solutions-cta-feature bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-serif text-xl text-white mb-2">Expert Consultation</h3>
            <p className="text-white/80 text-sm">
              Direct access to researchers and firmware engineers behind TinySentinel
            </p>
          </div>

          <div className="solutions-cta-feature bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-serif text-xl text-white mb-2">Custom Roadmap</h3>
            <p className="text-white/80 text-sm">
              Personalized validation and deployment milestones with clear metrics
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="solutions-cta-button px-8 py-4 bg-white text-earth rounded-full font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Schedule a TinySentinel Demo →
          </Link>
          <Link
            href="#"
            className="solutions-cta-button px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Validation Roadmap
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-center text-white/70 text-sm mb-4">
            Built with industrial and academic partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-white/60 text-sm font-semibold">Research Roots</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/60 text-sm font-semibold">Hardware-in-Loop</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/60 text-sm font-semibold">Regulatory Focus</div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-white/60 text-sm font-semibold">Early Adopter Program</div>
          </div>
        </div>
      </div>
    </section>
  );
}
