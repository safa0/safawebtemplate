"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive animation configuration
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      // Create horizontal slats reveal for mission text - fewer on mobile for performance
      const numberOfRects = isMobile ? 10 : isTablet ? 15 : 20;
      const animDuration = isMobile ? 0.7 : isTablet ? 0.9 : 1.2;
      const staggerAmount = isMobile ? 0.5 : isTablet ? 0.6 : 0.8;

      const elements = [
        { selector: ".mission-title", clipId: "mission-title-clip", delay: 0 },
        { selector: ".mission-statement", clipId: "mission-statement-clip", delay: 0.2 },
      ];

      // Create SVG element once
      let svg = document.querySelector("#mission-clip-svg") as SVGSVGElement;
      if (!svg) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as SVGSVGElement;
        svg.setAttribute("id", "mission-clip-svg");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");
        svg.style.position = "absolute";
        document.body.appendChild(svg);
      }

      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.appendChild(defs);

      // Check if section is in viewport - if so, play immediately, otherwise use ScrollTrigger
      const isInViewport = () => {
        if (!sectionRef.current) return false;
        const rect = sectionRef.current.getBoundingClientRect();
        return rect.left < window.innerWidth && rect.right > 0;
      };

      const shouldPlayImmediately = isInViewport();

      elements.forEach(({ selector, clipId, delay }) => {
        const element = document.querySelector(selector);
        if (!element) return;

        // Create clipPath with horizontal rectangles
        const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clipPath.setAttribute("id", clipId);
        clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

        const rectHeight = 1 / numberOfRects;

        // Create horizontal rectangles
        for (let i = 0; i < numberOfRects; i++) {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", "0");
          rect.setAttribute("y", String(i * rectHeight));
          rect.setAttribute("width", "1");
          rect.setAttribute("height", String(rectHeight));
          clipPath.appendChild(rect);
        }

        defs.appendChild(clipPath);

        // Apply clip-path to element
        gsap.set(element, {
          clipPath: `url(#${clipId})`
        });

        // Animate the rectangles with responsive timing
        const rects = clipPath.querySelectorAll("rect");

        if (shouldPlayImmediately) {
          // Play immediately if in viewport
          gsap.from(rects, {
            scaleY: 0,
            transformOrigin: "top center",
            duration: animDuration,
            delay: delay,
            ease: "power2.out",
            stagger: {
              amount: staggerAmount,
              ease: "none"
            }
          });
        } else {
          // Use ScrollTrigger if off-screen
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "left 80%",
            onEnter: () => {
              gsap.from(rects, {
                scaleY: 0,
                transformOrigin: "top center",
                duration: animDuration,
                delay: delay,
                ease: "power2.out",
                stagger: {
                  amount: staggerAmount,
                  ease: "none"
                }
              });
            },
            once: true
          });
        }
      });

      // Animate CTAs with horizontal slats too
      const ctaElements = document.querySelectorAll(".mission-cta");
      ctaElements.forEach((cta, index) => {
        const clipId = `mission-cta-clip-${index}`;

        const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clipPath.setAttribute("id", clipId);
        clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

        const rectHeight = 1 / numberOfRects;

        for (let i = 0; i < numberOfRects; i++) {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", "0");
          rect.setAttribute("y", String(i * rectHeight));
          rect.setAttribute("width", "1");
          rect.setAttribute("height", String(rectHeight));
          clipPath.appendChild(rect);
        }

        defs.appendChild(clipPath);

        gsap.set(cta, {
          clipPath: `url(#${clipId})`
        });

        const rects = clipPath.querySelectorAll("rect");
        const ctaDelay = isMobile ? 0.2 + (index * 0.1) : 0.4 + (index * 0.15);

        if (shouldPlayImmediately) {
          gsap.from(rects, {
            scaleY: 0,
            transformOrigin: "top center",
            duration: animDuration,
            delay: ctaDelay,
            ease: "power2.out",
            stagger: {
              amount: staggerAmount,
              ease: "none"
            }
          });
        } else {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "left 80%",
            onEnter: () => {
              gsap.from(rects, {
                scaleY: 0,
                transformOrigin: "top center",
                duration: animDuration,
                delay: ctaDelay,
                ease: "power2.out",
                stagger: {
                  amount: staggerAmount,
                  ease: "none"
                }
              });
            },
            once: true
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-section w-full h-full flex items-center justify-start px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-0 bg-[#032f35] min-h-screen"
    >
      <div className="mission-text w-full md:w-auto max-w-full md:max-w-[45vw]">
        <h2 className="mission-title font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-8 text-white leading-tight">
          {siteConfig.mission.title}
        </h2>
        <p className="mission-statement text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed text-white/90 mb-8 sm:mb-10 md:mb-12">
          {siteConfig.mission.statement}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6">
          <Link
            href="#work"
            className="mission-cta group inline-flex items-center justify-center sm:justify-start gap-2 text-white text-sm sm:text-base md:text-lg font-medium hover:gap-4 transition-all py-2 sm:py-0"
          >
            <span>Experience the Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/contact"
            className="mission-cta group inline-flex items-center justify-center sm:justify-start gap-2 text-white text-sm sm:text-base md:text-lg font-medium hover:gap-4 transition-all py-2 sm:py-0"
          >
            <span>Inquire</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
