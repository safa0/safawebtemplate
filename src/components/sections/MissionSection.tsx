"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        x: 100,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-section w-full h-full flex items-center justify-center px-8 md:px-20 bg-[#0284C7]"
      style={{ backgroundColor: "#0284C7" }}
    >
      <div className="mission-text max-w-4xl">
        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-white">
          {siteConfig.mission.title}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
          {siteConfig.mission.statement}
        </p>
      </div>
    </section>
  );
}
