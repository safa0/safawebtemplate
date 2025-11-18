"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hww-cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });

      gsap.from(".hww-cta-button", {
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

      gsap.from(".hww-cta-stats", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center 60%",
          end: "center 30%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hww-cta-section w-full py-20 md:py-32 px-8 md:px-20 bg-gradient-to-br from-earth via-khaki-dark to-earth text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-khaki rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-khaki rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Content */}
        <div className="hww-cta-content text-center mb-12 md:mb-16">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Ready to Transform Your Operations?
          </h2>

          <p className="text-lg md:text-xl text-khaki-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Let&apos;s discuss how our proven 5-step methodology can deliver measurable ROI to your organization.
          </p>

          {/* Next Steps Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block mb-8">
            <p className="text-sm uppercase tracking-widest text-khaki-light mb-2">
              Ready to Get Started?
            </p>
            <p className="text-2xl font-semibold mb-2">
              Schedule Your Free Automation Assessment
            </p>
            <p className="text-khaki-light text-sm">
              45 minutes with our experts to identify your highest-ROI opportunities
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/contact"
            className="hww-cta-button px-10 py-4 bg-white text-earth font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Schedule Free Assessment →
          </Link>
          <Link
            href="/why-automate"
            className="hww-cta-button px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
          >
            Learn About Our Approach
          </Link>
        </div>

        {/* What to Expect */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 mb-16">
          <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">
            What to Expect From Your Assessment
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-khaki-light">📋</div>
              <h4 className="font-semibold text-lg mb-3">Process Review</h4>
              <p className="text-khaki-light text-sm">
                In-depth analysis of your target processes and current workflows
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-khaki-light">💰</div>
              <h4 className="font-semibold text-lg mb-3">ROI Calculation</h4>
              <p className="text-khaki-light text-sm">
                Detailed financial model showing potential savings and ROI timeline
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3 text-khaki-light">🗺️</div>
              <h4 className="font-semibold text-lg mb-3">Implementation Roadmap</h4>
              <p className="text-khaki-light text-sm">
                Customized plan aligned with your organization&apos;s goals and timeline
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="hww-cta-stats text-center">
            <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
            <p className="text-khaki-light text-sm">Processes Automated</p>
          </div>
          <div className="hww-cta-stats text-center">
            <p className="text-4xl md:text-5xl font-bold mb-2">2M+</p>
            <p className="text-khaki-light text-sm">Hours Saved for Our Clients</p>
          </div>
          <div className="hww-cta-stats text-center">
            <p className="text-4xl md:text-5xl font-bold mb-2">$500M+</p>
            <p className="text-khaki-light text-sm">Total Savings Generated</p>
          </div>
          <div className="hww-cta-stats text-center">
            <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
            <p className="text-khaki-light text-sm">Project Success Rate</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 text-center border-t border-white/20 pt-8">
          <p className="text-khaki-light text-lg max-w-2xl mx-auto">
            Your competition is already automating. Don&apos;t get left behind.
            <span className="font-semibold"> The time to start is now.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
