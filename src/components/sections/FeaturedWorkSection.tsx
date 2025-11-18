"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
      });

      gsap.from(".cta-headline", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        x: 50,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-work-section w-full h-full flex items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 min-h-[50vh]"
      style={{
        background: "linear-gradient(135deg, #faf9f6 0%, #f5f3ef 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Section - 1/3 width */}
          <div className="cta-text w-full md:w-1/3 flex flex-col justify-between min-h-[200px] md:min-h-[300px]">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-12">
              Contact us today to discuss your project and receive a personalized quote tailored to your needs.
            </p>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-gray-800 text-base md:text-lg font-medium hover:gap-4 transition-all self-start"
            >
              <span className="underline">Inquire</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-px h-full min-h-[200px] bg-gray-300" />

          {/* Right Section - 2/3 width */}
          <div className="cta-headline w-full md:w-2/3 flex items-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 leading-tight">
              Let's bring your<br />vision to life.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
