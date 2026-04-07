"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".founder-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white section-padding-large"
    >
      <div className="max-w-4xl mx-auto">
        <div className="founder-content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight mb-8">
            The Founder
          </h2>

          <div className="flex items-start gap-8 md:gap-12">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-midnight/10 flex items-center justify-center">
              <span className="text-3xl md:text-4xl text-midnight/20">?</span>
            </div>

            <div className="space-y-4 text-midnight/60 leading-relaxed">
              <p className="text-lg">
                This section will be updated with the founder&apos;s story. The
                person behind [Programme Name] believes that the best AI talent
                won&apos;t come from traditional CS programmes alone&mdash;it
                will come from scientists and engineers who bring deep domain
                expertise to machine learning.
              </p>
              <p className="text-midnight/40 text-sm italic">
                Founder bio coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
