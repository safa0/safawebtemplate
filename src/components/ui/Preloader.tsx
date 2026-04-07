"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const hasPreloaderRun =
      typeof window !== "undefined"
        ? sessionStorage.getItem("preloaderCompleted")
        : null;

    if (hasPreloaderRun || pathname !== "/") {
      const ensureContentVisible = () => {
        const pageContent = document.querySelector(".page-content");
        if (pageContent) {
          gsap.set(pageContent, { opacity: 1, visibility: "visible" });
        }
      };

      const timeout = setTimeout(ensureContentVisible, 50);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  useEffect(() => {
    const hasPreloaderRun =
      typeof window !== "undefined"
        ? sessionStorage.getItem("preloaderCompleted")
        : null;

    if (hasPreloaderRun) {
      setIsLoading(false);
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        gsap.set(pageContent, { opacity: 1, visibility: "visible" });
      }
      return;
    }

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
    const totalResources = 2;

    const hidePageContent = () => {
      const pageContent = document.querySelector(".page-content");
      if (pageContent) {
        gsap.set(pageContent, { opacity: 0, visibility: "hidden" });
      }
    };

    hidePageContent();
    setTimeout(hidePageContent, 0);

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.min(
        (loadedCount / totalResources) * 100,
        100
      );
      setProgress(newProgress);
    };

    const completeLoading = () => {
      if (isComplete) return;
      isComplete = true;

      gsap.context(() => {
        const timeline = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            sessionStorage.setItem("preloaderCompleted", "true");
            const pageContent = document.querySelector(".page-content");
            if (pageContent) {
              gsap.set(pageContent, { opacity: 1, visibility: "visible" });
            }
          },
        });

        timeline.to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateProgress();
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300);
        }
      });
    } else {
      setTimeout(() => {
        updateProgress();
        if (loadedCount >= totalResources) {
          setTimeout(completeLoading, 300);
        }
      }, 500);
    }

    // Preload logo
    const img = new window.Image();
    img.onload = () => {
      updateProgress();
      if (loadedCount >= totalResources) {
        setTimeout(completeLoading, 300);
      }
    };
    img.onerror = () => {
      updateProgress();
      if (loadedCount >= totalResources) {
        setTimeout(completeLoading, 300);
      }
    };
    img.src = siteConfig.logo.path;

    const fallbackTimeout = setTimeout(() => {
      if (!isComplete) {
        completeLoading();
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center mb-8">
        <span className="text-3xl md:text-4xl font-bold text-white">
          {siteConfig.name}
        </span>
        <span className="text-sm text-khaki mt-2">{siteConfig.tagline}</span>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
