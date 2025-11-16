"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CircularScrollIndicator } from "@/components/ui/CircularScrollIndicator";

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        x: -100,
        opacity: 0,
      });

      gsap.from(".laptop-mockup", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-work-section min-h-screen flex items-center justify-center relative px-8 md:px-20 py-20"
    >
      <div className="max-w-6xl">
        <h2 className="work-title font-serif text-7xl md:text-9xl mb-12 text-gray-800">
          The Place
        </h2>

        <div className="laptop-mockup max-w-4xl">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Project Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <CircularScrollIndicator />
    </section>
  );
}
