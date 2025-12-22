"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const achievements = [
  {
    year: "2024",
    title: "Research Foundation",
    description: "Master's thesis proves lightweight ML IDS feasibility on microcontroller-class IIoT hardware.",
  },
  {
    year: "2025",
    title: "TinySentinel Formed",
    description: "Team formalized around on-device intrusion detection with academic and industrial collaborators.",
  },
  {
    year: "2025",
    title: "IEEE Submission",
    description: "Refined models and feature engineering submitted for peer review at an IEEE conference.",
  },
  {
    year: "2025",
    title: "Validation Funding",
    description: "Applied for research-based validation to fund novelty search, regulatory analysis, and dashboarding.",
  },
  {
    year: "2026",
    title: "Hardware Pilots",
    description: "Planned hardware-in-the-loop and field prototypes with early industrial partners.",
  },
  {
    year: "Future",
    title: "Edge-First Security",
    description: "Expanding TinySentinel across new boards, protocols, and partner ecosystems.",
  },
];

export function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievements-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".milestone", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 15%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
        stagger: 0.08,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="achievements-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-white"
    >
      <div className="max-w-5xl w-full">
        <h2 className="achievements-title font-serif text-5xl md:text-6xl mb-16 text-earth">
          Our Milestones
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-earth to-khaki"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.year}
                className="milestone"
              >
                <div className={`flex gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block px-4 py-2 bg-khaki-light rounded-full text-sm font-semibold text-earth mb-3">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-earth mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-lg text-khaki-dark leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-earth border-4 border-white relative z-10"></div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="hidden md:flex-1 md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
