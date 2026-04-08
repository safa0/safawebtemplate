"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsGridSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".project-row");
    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        gsap.set(row, { opacity: 1, y: 0 });

        ScrollTrigger.create({
          trigger: row,
          start: "top 90%",
          onEnter: () => {
            gsap.fromTo(
              row,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
            );
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { projects } = siteConfig;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pb-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-row grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">
                  {project.title}
                </h2>
                <p className="text-dark/60 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
