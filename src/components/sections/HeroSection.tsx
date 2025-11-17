"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      timeline
        .to(".floating-card-2", { x: -100, opacity: 0, duration: 1 }, 0)
        .to(".floating-card-3", { x: -80, opacity: 0, duration: 1 }, 0.1)
        .to(".hero-right-image", { x: "-20%", duration: 1 }, 0)
        .to(".hero-headline", { opacity: 0.3, scale: 0.95, duration: 1 }, 0)
        .to(".hero-bottom", { opacity: 0, x: -30, duration: 1 }, 0.3);

      // Load animations - wait for intro animation to complete
      const hasIntroPlayed = typeof window !== "undefined"
        ? sessionStorage.getItem("introAnimationPlayed")
        : true;

      const delay = hasIntroPlayed ? 0 : 3; // Wait for intro animation

      gsap.from(".logo-tagline", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: delay,
        ease: "power3.out",
      });

      gsap.from(".hero-headline", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: delay + 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-bottom", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: delay + 0.4,
        ease: "power3.out",
      });

      gsap.from(".floating-card", {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        delay: delay + 0.6,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section grid md:grid-cols-2 w-full h-full relative bg-white z-10"
    >
      {/* Left Panel */}
      <div className="bg-khaki-light p-8 md:p-20 flex flex-col justify-between relative z-10">
        <div className="logo-tagline mb-12">
          <div className="logo flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-transparent">
              <Image
                src={siteConfig.logo.path}
                alt={siteConfig.logo.alt}
                fill
                className="object-contain mix-blend-multiply"
                priority
                unoptimized
              />
            </div>
            <span className="text-4xl md:text-5xl font-serif font-bold text-earth">{siteConfig.name}</span>
          </div>
          <p className="tagline text-sm text-khaki-dark max-w-xs">
            {siteConfig.tagline}
          </p>
        </div>

        <h1 className="hero-headline font-serif text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
          {siteConfig.hero.headline.map((line, index) => (
            <span key={index}>
              {line}
              {index < siteConfig.hero.headline.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <div className="hero-bottom mt-auto">
          <div className="relative w-48 h-60 mb-6 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
              alt="Studio"
              fill
              className="object-cover"
            />
          </div>

          <p className="max-w-md mb-8 text-khaki-dark leading-relaxed">
            {siteConfig.hero.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Scroll For More</span>
            <div className="scroll-arrow animate-pulse">→</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative overflow-hidden h-full bg-earth z-10">
        <div
          className="hero-right-image absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
            backgroundColor: "#9C8B6C", // Fallback color while image loads
          }}
        />

        {/* Full-screen Card - covers entire right side */}
        <div className="floating-card floating-card-2 absolute inset-0 z-20 overflow-hidden bg-gray-900">
          <Image
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80"
            alt="Featured Design"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
