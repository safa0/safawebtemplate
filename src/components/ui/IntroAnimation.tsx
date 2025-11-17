"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function IntroAnimation() {
  const [isAnimating, setIsAnimating] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if animation has already played
    const hasPlayed = sessionStorage.getItem("introAnimationPlayed");

    if (hasPlayed) {
      setIsAnimating(false);
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("introAnimationPlayed", "true");
          setIsAnimating(false);
        },
      });

      // 1. Radial reveal - logo expands from center with multiple effects
      timeline
        .fromTo(
          logoRef.current,
          {
            clipPath: "circle(0% at 50% 50%)",
            scale: 0.3,
            opacity: 0,
            rotation: -180,
          },
          {
            clipPath: "circle(100% at 50% 50%)",
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.4,
            ease: "elastic.out(1, 0.6)",
          }
        )
        // Subtle pulse effect
        .to(logoRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        })
        // 2. Hold for dramatic effect
        .to({}, { duration: 0.4 })
        // 3. Logo shrinks and moves to header position (top-left)
        .to(logoRef.current, {
          scale: 0.25,
          x: -window.innerWidth / 2 + 80,
          y: -window.innerHeight / 2 + 40,
          duration: 1,
          ease: "power3.inOut",
        })
        // 4. Fade out overlay
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        // 5. Reveal page content
        .from(
          ".page-content",
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  if (!isAnimating) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-khaki-light flex items-center justify-center"
    >
      <div ref={logoRef} className="relative w-64 h-64 flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={siteConfig.logo.path}
            alt={siteConfig.logo.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-5xl font-serif font-bold text-earth mt-8">
          {siteConfig.name}
        </span>
      </div>
    </div>
  );
}
