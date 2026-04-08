"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const weSeek = [
  "A STEM background (physics, chemistry, biology, engineering, mathematics)",
  "Genuine curiosity about applying AI within your domain",
  "Ability to articulate why becoming AI-enabled matters for your field",
  "Mathematical comfort at the undergraduate level",
  "Willingness to commit 50 hours per week as your primary focus",
];

const youPrepare = [
  "Considered paragraphs about your background and motivation",
  "An answer to: what would you build if you could build anything?",
  "Readiness for a math and logic diagnostic (~2 hours, take-home)",
  "30 minutes for an interview on your goals and programme fit",
  "Your academic transcript or degree certificate (PDF)",
];

export function WhatToExpectSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".expect-col", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".expect-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-khaki-light section-padding-large"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-12 text-center">
          What to Expect
        </h2>

        <div className="expect-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* What we look for */}
          <div className="expect-col p-8 md:p-10 rounded-2xl bg-white border border-earth/10">
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              What We Look For
            </h3>
            <ul className="space-y-4">
              {weSeek.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-dark/60"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What to prepare */}
          <div className="expect-col p-8 md:p-10 rounded-2xl bg-white border border-earth/10">
            <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-khaki/10 text-dark">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </span>
              What to Prepare
            </h3>
            <ul className="space-y-4">
              {youPrepare.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-dark/60"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5 text-dark/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
