"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CircularScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const updateProgress = () => {
      const scrollPercent =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
      const offset = circumference - scrollPercent * circumference;
      circle.style.strokeDashoffset = `${offset}`;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    // Rotate preview image
    gsap.to(".circular-preview img", {
      scrollTrigger: {
        trigger: ".featured-work-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      rotation: 360,
      ease: "none",
    });

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 z-50 hidden md:block">
      <div className="relative w-[500px] h-[500px]">
        <svg
          className="absolute inset-0 -rotate-90"
          width="500"
          height="500"
        >
          <circle
            className="stroke-white/20"
            strokeWidth="2"
            fill="transparent"
            r="200"
            cx="250"
            cy="250"
          />
          <circle
            ref={circleRef}
            className="stroke-white transition-all duration-300"
            strokeWidth="2"
            fill="transparent"
            r="200"
            cx="250"
            cy="250"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-6 py-3 rounded-full text-sm mb-8 hover:scale-105 transition-transform">
            View Project →
          </button>

          <div className="circular-preview w-64 h-64 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80"
              alt="Preview"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-lg text-gray-800 font-semibold mb-2">/03 /04</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider">
            Scroll
          </div>
        </div>
      </div>
    </div>
  );
}
