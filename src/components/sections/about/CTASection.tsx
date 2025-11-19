"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-cta-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".about-cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".about-cta-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.9,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-cta-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="about-cta-title font-serif text-5xl md:text-7xl mb-8 text-earth">
          Ready to Transform Your Operations?
        </h2>

        <p className="about-cta-content text-xl md:text-2xl text-khaki-dark mb-12 leading-relaxed">
          Let&apos;s explore how Ansyn can help you achieve operational excellence through intelligent automation. Schedule a consultation with our team today.
        </p>

        <div className="about-cta-button space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center">
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-earth text-white rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Get in Touch →
          </Link>
          <Link
            href="/why-automate"
            className="inline-block px-12 py-4 bg-khaki-light text-earth rounded-full text-lg font-semibold border-2 border-earth hover:bg-earth hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-16 pt-12 border-t-2 border-khaki">
          <p className="text-lg text-khaki-dark mb-6">
            Or reach out directly:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div>
              <p className="text-sm text-khaki-dark mb-2">Email</p>
              <a
                href="mailto:hello@lambdaflow.com"
                className="text-xl font-semibold text-earth hover:text-accent transition-colors"
              >
                hello@lambdaflow.com
              </a>
            </div>
            <div>
              <p className="text-sm text-khaki-dark mb-2">Phone</p>
              <a
                href="tel:+1-800-AUTOMATE"
                className="text-xl font-semibold text-earth hover:text-accent transition-colors"
              >
                +1 (800) AUTO-MATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
