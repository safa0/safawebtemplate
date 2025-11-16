"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
      limitCallbacks: true,
      syncInterval: 150,
    });

    // Initialize Lenis - keep vertical for natural wheel scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Setup GSAP horizontal scroll
    const setupHorizontalScroll = () => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-horizontal-section]");

      if (sections.length === 0) return;

      const container = document.querySelector("[data-horizontal-scroll]") as HTMLElement;
      if (!container) return;

      // Calculate total scroll distance
      const totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0);

      // Create horizontal scroll animation
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power1.inOut",
          },
          end: () => `+=${totalWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(setupHorizontalScroll, 100);

    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) return;

      if (e.key === "ArrowRight") {
        lenis.scrollTo(window.scrollY + window.innerHeight, { duration: 1.2 });
      }
      if (e.key === "ArrowLeft") {
        lenis.scrollTo(window.scrollY - window.innerHeight, { duration: 1.2 });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyPress);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
