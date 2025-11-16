"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="mission-section min-h-screen flex items-center justify-center px-8 md:px-20"
    >
      <div className="mission-text max-w-4xl">
        <h2 className="font-serif text-5xl md:text-6xl mb-8 text-white">
          Our Mission
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-white/90">
          Redefine the digital landscape by crafting elegant, human-centered
          experiences that seamlessly blend aesthetics with functionality,
          empowering brands to connect meaningfully with their audiences.
        </p>
      </div>
    </section>
  );
}
