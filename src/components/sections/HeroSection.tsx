"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

      // Badge fade in
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
      });

      // Headline slat reveal
      const numberOfRects = isMobile ? 6 : 8;
      const clipId = "hero-headline-clip";

      let svg = document.querySelector("#hero-clip-svg") as SVGSVGElement;
      if (!svg) {
        svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        ) as SVGSVGElement;
        svg.setAttribute("id", "hero-clip-svg");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");
        svg.style.position = "absolute";
        document.body.appendChild(svg);
      }

      const defs =
        svg.querySelector("defs") ||
        svg.appendChild(
          document.createElementNS("http://www.w3.org/2000/svg", "defs")
        );

      const clipPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "clipPath"
      );
      clipPath.setAttribute("id", clipId);
      clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

      const rectWidth = 1 / numberOfRects;
      for (let i = 0; i < numberOfRects; i++) {
        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("x", String(i * rectWidth));
        rect.setAttribute("y", "0");
        rect.setAttribute("width", String(rectWidth));
        rect.setAttribute("height", "1");
        clipPath.appendChild(rect);
      }

      defs.appendChild(clipPath);

      const headline = document.querySelector(".hero-headline");
      if (headline) {
        gsap.set(headline, { clipPath: `url(#${clipId})` });
        const rects = clipPath.querySelectorAll("rect");
        gsap.from(rects, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: isMobile ? 0.8 : 1.2,
          delay: 0.3,
          ease: "power2.out",
          stagger: { amount: isMobile ? 0.5 : 0.8, ease: "none" },
        });
      }

      // Description and CTAs stagger in
      gsap.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Right panel gradient reveal
      gsap.from(".hero-visual", {
        opacity: 0,
        scale: isMobile ? 1 : 0.95,
        duration: 1.2,
        delay: 0.4,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative w-full min-h-screen flex items-center bg-white overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center self-start gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {siteConfig.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1]">
              {siteConfig.hero.headline.map((line, index) => (
                <span key={`headline-${index}`} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="hero-description text-lg md:text-xl text-dark/60 max-w-xl leading-relaxed">
              {siteConfig.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href={siteConfig.hero.cta.link}
                className="hero-cta btn-primary"
              >
                {siteConfig.hero.cta.text}
              </Link>
              <Link
                href={siteConfig.hero.secondaryCta.link}
                className="hero-cta btn-ghost text-dark/70 hover:text-dark"
              >
                <span>{siteConfig.hero.secondaryCta.text}</span>
                <span>&darr;</span>
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Abstract gradient mesh */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dark via-dark to-dark/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent/10" />
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent/15 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-400/10 rounded-full blur-2xl" />
              </div>
              {/* Floating stats */}
              <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">$200</div>
                <div className="text-sm text-white/60">monthly stipend</div>
              </div>
              <div className="absolute bottom-12 left-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">3&ndash;12</div>
                <div className="text-sm text-white/60">months to job-ready</div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  STEM &rarr; AI
                </div>
                <div className="text-white/60 text-sm">
                  Your bridge to machine learning
                </div>
              </div>
            </div>
          </div>

          {/* Mobile visual - simpler */}
          <div className="hero-visual lg:hidden flex justify-center">
            <div className="w-full max-w-sm p-8 rounded-2xl bg-gradient-to-br from-dark to-dark text-center">
              <div className="text-3xl font-bold text-white mb-2">
                STEM &rarr; AI
              </div>
              <div className="text-white/60 text-sm mb-4">
                Your bridge to machine learning
              </div>
              <div className="flex justify-center gap-6 text-white">
                <div>
                  <div className="text-xl font-bold">$200</div>
                  <div className="text-xs text-white/60">/month</div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="text-xl font-bold">3&ndash;12mo</div>
                  <div className="text-xs text-white/60">to job-ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
