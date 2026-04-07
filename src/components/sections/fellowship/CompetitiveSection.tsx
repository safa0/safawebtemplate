"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CompetitiveSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".competitive-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".competitive-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".competitive-table", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".competitive-table",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".differentiator-item", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".differentiators-list",
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
      className="competitive-section w-full bg-white section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="competitive-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            {siteConfig.competitiveLandscape.title}
          </h2>
          <p className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto">
            {siteConfig.competitiveLandscape.subtitle}
          </p>
        </div>

        {/* Five Differentiators */}
        <div className="differentiators-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {siteConfig.competitiveLandscape.differentiators.map(
            (item, index) => (
              <div
                key={`diff-${index}`}
                className="differentiator-item p-5 rounded-xl bg-khaki-light border border-earth/10 text-center"
              >
                <div className="text-accent font-bold text-lg mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-dark/70 leading-relaxed">{item}</p>
              </div>
            )
          )}
        </div>

        {/* Comparison Table */}
        <div className="competitive-table overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-earth/20">
                <th className="py-4 pr-4 text-sm font-bold text-dark uppercase tracking-wider">
                  Programme
                </th>
                <th className="py-4 pr-4 text-sm font-bold text-dark uppercase tracking-wider hidden sm:table-cell">
                  Target
                </th>
                <th className="py-4 pr-4 text-sm font-bold text-dark uppercase tracking-wider hidden md:table-cell">
                  Stipend
                </th>
                <th className="py-4 pr-4 text-sm font-bold text-dark uppercase tracking-wider hidden md:table-cell">
                  Duration
                </th>
                <th className="py-4 text-sm font-bold text-dark uppercase tracking-wider">
                  Key Difference
                </th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.competitiveLandscape.comparison.map((row) => (
                <tr
                  key={row.programme}
                  className={`border-b border-earth/10 ${
                    "isUs" in row && row.isUs
                      ? "bg-accent/5 font-medium"
                      : "hover:bg-khaki-light/50"
                  } transition-colors`}
                >
                  <td className="py-4 pr-4 text-sm text-dark">
                    {"isUs" in row && row.isUs ? (
                      <span className="font-bold text-accent">
                        {row.programme}
                      </span>
                    ) : (
                      row.programme
                    )}
                  </td>
                  <td className="py-4 pr-4 text-sm text-dark/60 hidden sm:table-cell">
                    {row.target}
                  </td>
                  <td className="py-4 pr-4 text-sm text-dark/60 hidden md:table-cell">
                    {row.stipend}
                  </td>
                  <td className="py-4 pr-4 text-sm text-dark/60 hidden md:table-cell">
                    {row.duration}
                  </td>
                  <td className="py-4 text-sm text-dark/70">
                    {row.difference}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
