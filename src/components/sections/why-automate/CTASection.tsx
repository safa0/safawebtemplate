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
            Ready to Transform Your Operations?
          </h2>

          <p className="text-lg md:text-xl text-khaki-light max-w-3xl mx-auto mb-8">
            Get a personalized automation assessment today. Our experts will identify your highest-ROI opportunities and create a roadmap for measurable success.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block mb-8">
            <p className="text-sm uppercase tracking-widest text-khaki-light mb-2">Next Steps</p>
            <p className="text-2xl font-semibold">
              Get a free Process Automation Assessment
            </p>
            <p className="text-khaki-light text-sm mt-2">
              Typically takes 30-45 minutes and uncovers $200K-$2M in annual savings potential
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="#contact"
            className="cta-button px-10 py-4 bg-white text-earth font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Schedule Free Assessment →
          </Link>
          <Link
            href="/resources"
            className="cta-button px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg"
          >
            Download ROI Playbook
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">500+</p>
            <p className="text-khaki-light text-sm">Processes Automated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">2M+</p>
            <p className="text-khaki-light text-sm">Hours Saved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">$500M+</p>
            <p className="text-khaki-light text-sm">Total Savings Generated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold mb-2">98%</p>
            <p className="text-khaki-light text-sm">Client Satisfaction</p>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 md:mt-24 bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12">
          <p className="text-sm uppercase tracking-widest text-khaki-light text-center mb-8">
            Trusted by leaders in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <span className="text-white/60 font-semibold">Finance</span>
            <span className="text-white/60 font-semibold">Insurance</span>
            <span className="text-white/60 font-semibold">Healthcare</span>
            <span className="text-white/60 font-semibold">Manufacturing</span>
            <span className="text-white/60 font-semibold">Retail</span>
            <span className="text-white/60 font-semibold">Technology</span>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-khaki-light text-lg max-w-2xl mx-auto">
            Your competition is already automating. Don&apos;t get left behind. The time to start is now.
          </p>
        </div>
      </div>
    </section>
  );
}
