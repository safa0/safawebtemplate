"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Ensure content is visible on route changes (after preloader has run)
  useEffect(() => {
    const hasPreloaderRun = typeof window !== "undefined"
      ? sessionStorage.getItem("preloaderCompleted")
      : null;

    if (hasPreloaderRun || pathname !== "/") {
      // Preloader already ran or not on homepage, ensure content is visible
      const ensureContentVisible = () => {
        const pageContent = document.querySelector(".page-content");
        if (pageContent) {
          gsap.set(pageContent, { opacity: 1, visibility: "visible" });
        }
      };

      // Small delay to ensure DOM is ready
      const timeout = setTimeout(ensureContentVisible, 50);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  // Initial preloader - only runs once on mount
  useEffect(() => {
    // Check if preloader has already run (only show on first visit)
    const hasPreloaderRun = typeof window !== "undefined"
      ? sessionStorage.getItem("preloaderCompleted")
      : null;

    if (hasPreloaderRun) {
      // Preloader already ran, ensure content is visible
      setIsLoading(false);
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        gsap.set(pageContent, { opacity: 1, visibility: "visible" });
      }
      return;
    }

    // Only run preloader on homepage (initial load)
    const isHomepage = pathname === "/";
    if (!isHomepage) {
      setIsLoading(false);
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        gsap.set(pageContent, { opacity: 1, visibility: "visible" });
      }
      return;
    }

    let loadedCount = 0;
    let isComplete = false;
    const totalResources = 4; // Fonts + 3 critical images

    // Wait for DOM to be ready, then hide page content
    const hidePageContent = () => {
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        gsap.set(pageContent, { opacity: 0, visibility: "hidden" });
      }
    };

    // Try immediately, and also on next tick
    hidePageContent();
    setTimeout(hidePageContent, 0);

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.min((loadedCount / totalResources) * 100, 100);
      setProgress(newProgress);
    };

    const completeLoading = () => {
      if (isComplete) return;
      isComplete = true;

      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            // Mark preloader as completed
            sessionStorage.setItem("preloaderCompleted", "true");
            // Show page content
            const pageContent = document.querySelector(".page-content");
            if (pageContent) {
              gsap.set(pageContent, { opacity: 1, visibility: "visible" });
            }
          },
        });

        // Fade out preloader
        timeline.to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      return () => ctx.revert();
    };

    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateProgress();
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300); // Small delay for smooth transition
        }
      });
    } else {
      // Fallback if fonts API not available
      setTimeout(() => {
        updateProgress();
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300);
        }
      }, 500);
    }

    // Preload critical images
    const criticalImages = [
      siteConfig.logo.path,
      "https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80", // Ocean image
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80", // Featured design
    ];

    let imagesLoaded = 0;
    criticalImages.forEach((src) => {
      const img = new window.Image();
      img.onload = () => {
        imagesLoaded++;
        updateProgress();
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300);
        }
      };
      img.onerror = () => {
        imagesLoaded++;
        updateProgress(); // Count as loaded even if error
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300);
        }
      };
      img.src = src;
    });

    // Fallback: ensure loading completes even if some resources fail
    const fallbackTimeout = setTimeout(() => {
      if (!isComplete) {
        completeLoading();
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  if (!isLoading) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-khaki-light flex flex-col items-center justify-center"
    >
      <div ref={logoRef} className="relative w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center mb-8">
        <div className="relative w-full h-full">
          <Image
            src={siteConfig.logo.path}
            alt={siteConfig.logo.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-3xl md:text-4xl font-serif font-bold text-earth mt-4">
          {siteConfig.name}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-1 bg-khaki-dark/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-earth transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

