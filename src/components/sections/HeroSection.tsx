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
        .to(".floating-card-1", { y: -100, opacity: 0, duration: 1 }, 0)
        .to(".floating-card-2", { y: -80, opacity: 0, duration: 1 }, 0.1)
        .to(".floating-card-3", { y: -60, opacity: 0, duration: 1 }, 0.2)
        .to(".hero-right-image", { y: "30%", duration: 1 }, 0)
        .to(".hero-headline", { opacity: 0.3, scale: 0.95, duration: 1 }, 0)
        .to(".hero-bottom", { opacity: 0, y: 20, duration: 1 }, 0.3);

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
        y: 50,
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
      className="hero-section grid md:grid-cols-2 min-h-screen relative"
    >
      {/* Left Panel */}
      <div className="bg-beige p-8 md:p-20 flex flex-col justify-between">
        <div className="logo-tagline mb-12">
          <div className="logo text-6xl mb-2 font-cursive">M</div>
          <p className="tagline text-sm text-gray-600 max-w-xs">
            A studio crafting captivating digital experiences
          </p>
        </div>

        <h1 className="hero-headline font-serif text-6xl md:text-7xl lg:text-8xl leading-tight mb-8">
          Award-winning
          <br />
          design boutique
          <br />
          agency
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

          <p className="max-w-md mb-8 text-gray-700 leading-relaxed">
            We specialize in UX/UI design and branding, creating memorable
            digital experiences that resonate with your audience.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Scroll For More</span>
            <div className="scroll-arrow animate-bounce">↓</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="relative overflow-hidden min-h-[60vh] md:min-h-full">
        <div
          className="hero-right-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')",
          }}
        />

        <ScrollTimer />

        {/* Floating Cards */}
        <FloatingCard
          number={1}
          imageUrl="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80"
          className="floating-card floating-card-1 top-[20%] right-[15%] z-30"
        />
        <FloatingCard
          number={2}
          imageUrl="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&q=80"
          className="floating-card floating-card-2 top-[45%] right-[40%] z-20"
        />
        <FloatingCard
          number={3}
          imageUrl="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&q=80"
          className="floating-card floating-card-3 top-[60%] right-[20%] z-10"
        />
      </div>
    </section>
  );
}
