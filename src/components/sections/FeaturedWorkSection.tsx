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
      className="featured-work-section w-full h-full flex items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 min-h-screen"
    >
      <div className="max-w-6xl w-full">
        <h2 className="work-title font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-6 sm:mb-8 md:mb-12 text-gray-800 leading-tight">
          The Place
        </h2>

        <div className="laptop-mockup max-w-4xl w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Project Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* <CircularScrollIndicator /> */}
    </section>
  );
}
