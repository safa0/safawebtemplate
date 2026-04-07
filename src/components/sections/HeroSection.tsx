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

      // Right panel reveal
      gsap.from(".hero-visual", {
        opacity: 0,
        scale: isMobile ? 1 : 0.95,
        duration: 1.2,
        delay: 0.4,
        ease: "power2.out",
      });

      // Animate the data points
      gsap.from(".hero-data-point", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1.0,
        stagger: 0.2,
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
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A2E 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              <Link
                href={siteConfig.hero.cta.link}
                className="hero-cta inline-block px-8 md:px-12 py-3 md:py-4 bg-accent text-white rounded-full text-base md:text-lg font-medium hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                {siteConfig.hero.cta.text}
              </Link>
              <Link
                href={siteConfig.hero.secondaryCta.link}
                className="hero-cta inline-flex items-center gap-2 text-base md:text-lg font-medium text-dark/70 hover:text-dark hover:gap-4 transition-all duration-300"
              >
                <span>{siteConfig.hero.secondaryCta.text}</span>
                <span>&darr;</span>
              </Link>
            </div>
          </div>

          {/* Right: Typographic / Data Visual */}
          <div className="hero-visual relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Geometric grid background */}
              <div className="absolute inset-0 rounded-3xl bg-dark overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(233,69,96,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(233,69,96,0.3) 1px, transparent 1px)`,
                  backgroundSize: '60px 60px',
                }} />
                {/* Diagonal accent line */}
                <div className="absolute top-0 right-0 w-full h-full">
                  <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                    <line x1="0" y1="400" x2="400" y2="0" stroke="#E94560" strokeWidth="1" />
                    <line x1="50" y1="400" x2="400" y2="50" stroke="#E94560" strokeWidth="0.5" />
                    <line x1="0" y1="350" x2="350" y2="0" stroke="#E94560" strokeWidth="0.5" />
                  </svg>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 blur-2xl" />
              </div>

              {/* Data points floating on the visual */}
              <div className="absolute top-8 right-8 hero-data-point">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white font-mono">$200</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1">monthly stipend</div>
                </div>
              </div>

              <div className="absolute bottom-12 left-8 hero-data-point">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white font-mono">3&ndash;12</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1">months to job-ready</div>
                </div>
              </div>

              <div className="absolute top-1/3 left-12 hero-data-point">
                <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-4 border border-accent/20">
                  <div className="text-2xl font-bold text-white font-mono">0</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1">tuition cost</div>
                </div>
              </div>

              {/* Central typographic element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/90 font-mono tracking-tighter">
                    STEM
                  </div>
                  <div className="flex items-center justify-center gap-3 my-2">
                    <div className="w-8 h-px bg-accent" />
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="w-8 h-px bg-accent" />
                  </div>
                  <div className="text-6xl font-bold text-accent font-mono tracking-tighter">
                    AI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile visual — compact data strip */}
          <div className="hero-visual lg:hidden">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "$200", label: "monthly stipend" },
                { value: "3–12mo", label: "to job-ready" },
                { value: "$0", label: "tuition" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-dark text-center"
                >
                  <div className="text-lg font-bold text-white font-mono">
                    {item.value}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
