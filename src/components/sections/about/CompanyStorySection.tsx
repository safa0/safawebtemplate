"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CompanyStorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".thesis-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".thesis-content",
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
      <div className="thesis-content max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-8">
          The Thesis
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-dark/60 leading-relaxed">
          <p>{siteConfig.problem.statement}</p>
          <p>
            These people already exist. They graduated with strong mathematics,
            scientific rigour, and systems thinking. They don&apos;t need to
            abandon their discipline&mdash;they need to become AI-enabled within
            it. The path to AI fluency for a strong STEM graduate is
            short&mdash;but nobody is building it at the right scale or the
            right price point.
          </p>
          <p className="text-dark font-medium text-xl md:text-2xl">
            This programme is that bridge.{" "}
            <span className="text-accent">
              Angel investing for human capital.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
