"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  agent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
      <path d="M18 14h.5a3.5 3.5 0 0 1 0 7H18" />
      <path d="M6 14h-.5a3.5 3.5 0 0 0 0 7H6" />
      <path d="M6 14a6 6 0 0 1 12 0v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3Z" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  fitness: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M18 4h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v10h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1V6h1a1 1 0 0 0 0-2Z" />
      <path d="M10 4H9V3a1 1 0 0 0-2 0v1H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H9V6h1a1 1 0 0 0 0-2Z" />
    </svg>
  ),
  analysis: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 5-6" />
    </svg>
  ),
  audio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  food: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12h20c0-5.52-4.48-10-10-10Z" />
      <path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10" />
      <path d="M2 12h20" />
    </svg>
  ),
  medical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  "AI Agents": "bg-blue-100 text-blue-800",
  "Computer Vision": "bg-purple-100 text-purple-800",
  "Pose Estimation": "bg-green-100 text-green-800",
  "NLP & ML": "bg-amber-100 text-amber-800",
  "Audio ML": "bg-pink-100 text-pink-800",
  "Vision & CLIP": "bg-indigo-100 text-indigo-800",
  "Medical Imaging": "bg-red-100 text-red-800",
  "Marketing ML": "bg-teal-100 text-teal-800",
};

export function ProjectsGridSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;

      if (isMobile) {
        gsap.from(".projects-grid-title", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.from(".project-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      } else {
        gsap.from(".projects-grid-title", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          y: 50,
          opacity: 0,
        });

        gsap.from(".project-card", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
          y: 80,
          opacity: 0,
          stagger: 0.15,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { projects } = siteConfig;

  return (
    <section
      ref={sectionRef}
      className="projects-grid-section w-full bg-stone-50 py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="projects-grid-title font-serif text-3xl sm:text-4xl md:text-6xl mb-10 sm:mb-14 md:mb-20 text-earth text-center leading-tight">
          What Our Fellows Build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-earth">
                  {iconMap[project.icon] ?? null}
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[project.category] ??
                    "bg-stone-100 text-stone-700"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-earth mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-khaki-dark leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
