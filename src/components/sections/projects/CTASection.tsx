"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-cta-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".projects-cta-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".projects-cta-button", {
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
      className="projects-cta-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="projects-cta-title font-serif text-5xl md:text-7xl mb-8 text-earth">
          Have a Project Idea?
        </h2>

        <p className="projects-cta-content text-xl md:text-2xl text-khaki-dark mb-12 leading-relaxed">
          Fellows work on real-world AI projects with mentorship and support.
          Apply to bring your idea to life.
        </p>

        <div className="projects-cta-button">
          <Link
            href="/apply"
            className="inline-block px-12 py-4 bg-earth text-white rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Apply Now &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
