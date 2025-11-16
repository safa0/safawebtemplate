"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".footer-cta", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="footer-section w-full h-full flex items-center justify-center text-center px-8"
    >
      <div>
        <h2 className="footer-title font-serif text-5xl md:text-7xl mb-8 text-gray-800 max-w-4xl mx-auto">
          Let's Create Something Beautiful
        </h2>

        <Link
          href="#contact"
          className="footer-cta inline-block px-12 py-4 bg-gray-800 text-white rounded-full text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          Get in Touch →
        </Link>
      </div>
    </section>
  );
}
