"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ApplyFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".apply-form-content", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".apply-form-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-accent section-padding-large"
    >
      <div className="apply-form-content max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Apply?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          The application takes about 20 minutes. No CV, no cover letter. Just
          honest answers about who you are and what you want to build.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 bg-white text-accent text-lg font-bold rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          Start Your Application
        </a>
        <p className="text-white/50 text-sm mt-6">
          Applications are reviewed on a rolling basis. You&apos;ll hear back
          within 2 weeks.
        </p>
      </div>
    </section>
  );
}
