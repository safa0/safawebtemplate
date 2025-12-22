"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });

      gsap.from(".cta-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section w-full py-20 md:py-32 px-8 md:px-20 bg-gradient-to-br from-earth via-khaki-dark to-earth text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="cta-content text-center mb-12 md:mb-16">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Ready to Secure Your IIoT?
          </h2>

          <p className="text-lg md:text-xl text-khaki-light max-w-3xl mx-auto mb-8">
            Get a personalized TinySentinel assessment. We&apos;ll align threat models, hardware limits, and compliance needs to an on-device IDS plan.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block mb-8">
            <p className="text-sm uppercase tracking-widest text-khaki-light mb-2">Next Steps</p>
            <p className="text-2xl font-semibold">
              Book a TinySentinel Strategy Call
            </p>
            <p className="text-khaki-light text-sm mt-2">
              30–45 minutes to review devices, protocols, and validation goals
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="cta-button px-10 py-4 bg-white text-earth font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Schedule a Demo →
          </Link>
          <Link
            href="/blog"
            className="cta-button px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
          >
            Read Insights
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">98.7%</p>
            <p className="text-khaki-light text-sm">Detection Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">&lt;10 ms</p>
            <p className="text-khaki-light text-sm">Inference Latency</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">&lt;256 KB</p>
            <p className="text-khaki-light text-sm">Model Footprint</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-khaki-light text-sm">Target Boards</p>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 md:mt-24 bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-khaki-light text-center mb-8">
            Built with leaders in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <span className="text-white/60 font-semibold">Manufacturing</span>
            <span className="text-white/60 font-semibold">Energy</span>
            <span className="text-white/60 font-semibold">Edge Platforms</span>
            <span className="text-white/60 font-semibold">Integrators</span>
            <span className="text-white/60 font-semibold">Security Partners</span>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-khaki-light text-lg max-w-2xl mx-auto">
            Device-level threats won&apos;t wait for connectivity or cloud pipelines. Bring detection to the edge now.
          </p>
        </div>
      </div>
    </section>
  );
}
