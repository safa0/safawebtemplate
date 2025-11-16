"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ScrollTimer } from "@/components/ui/ScrollTimer";
import { FloatingCard } from "@/components/ui/FloatingCard";

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
        .to(".floating-card-1", { x: -200, opacity: 0, duration: 1 }, 0)
        .to(".floating-card-2", { x: -180, opacity: 0, duration: 1 }, 0.1)
        .to(".floating-card-3", { x: -160, opacity: 0, duration: 1 }, 0.2)
        .to(".hero-right-image", { x: "-20%", duration: 1 }, 0)
        .to(".hero-headline", { opacity: 0.3, scale: 0.95, duration: 1 }, 0)
        .to(".hero-bottom", { opacity: 0, x: -30, duration: 1 }, 0.3);

      // Load animations
      gsap.from(".logo", {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "power3.out",
      });

      gsap.from(".hero-headline", {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".floating-card", {
        duration: 1,
        opacity: 0,
        x: 100,
        stagger: 0.15,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section grid md:grid-cols-2 w-full h-full relative"
    >
      {/* Left Panel */}
      <div className="bg-khaki-light p-8 md:p-20 flex flex-col justify-between">
        <div className="logo-tagline mb-12">
          <div className="logo flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/logo.svg"
                alt="FlowForce Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-4xl md:text-5xl font-serif font-bold text-earth">FlowForce</span>
          </div>
          <p className="tagline text-sm text-khaki-dark max-w-xs">
            Transforming ideas into seamless digital experiences
          </p>
        </div>

        <h1 className="hero-headline font-serif text-6xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
          Professional
          <br />
          digital solutions
          <br />
          that flow
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
            We create powerful digital solutions that flow naturally with your business,
            delivering seamless experiences that drive growth and innovation.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Scroll For More</span>
            <div className="scroll-arrow animate-pulse">→</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative overflow-hidden h-full">
        <div
          className="hero-right-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
          }}
        />

        <ScrollTimer />

        {/* Floating Cards */}
        <FloatingCard
          number={1}
          imageUrl="https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400&q=80"
          className="floating-card floating-card-1 top-[20%] right-[15%] z-30"
        />

        {/* Full-screen Card 2 */}
        <div className="floating-card floating-card-2 absolute inset-0 z-20 p-8 flex items-end justify-start">
          <div className="relative w-full h-[80%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80"
              alt="Featured Design 2"
              fill
              className="object-cover"
            />
            <div className="absolute top-8 left-8 text-9xl font-light text-white/30">2</div>
          </div>
        </div>

        <FloatingCard
          number={3}
          imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80"
          className="floating-card floating-card-3 top-[60%] right-[20%] z-10"
        />
      </div>
    </section>
  );
}
