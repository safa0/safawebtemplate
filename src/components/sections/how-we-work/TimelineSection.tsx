"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  milestones: string[];
  deliverables: string[];
}

const timelinePhases: TimelinePhase[] = [
  {
    phase: "Phase 1: Discovery & Planning",
    duration: "2-3 weeks",
    description: "Comprehensive analysis of your processes and development of the automation strategy",
    milestones: [
      "Initial assessment completed",
      "Process documentation finalized",
      "Business case & ROI model approved",
      "Project charter signed off",
    ],
    deliverables: [
      "Process mapping document",
      "ROI analysis report",
      "Risk register",
      "Project plan & timeline",
    ],
  },
  {
    phase: "Phase 2: Design & Architecture",
    duration: "2-3 weeks",
    description: "Solution design, technology selection, and architecture planning",
    milestones: [
      "Architecture design reviewed",
      "Integration points mapped",
      "Security framework approved",
      "Technology stack finalized",
    ],
    deliverables: [
      "Solution architecture document",
      "Technical specifications",
      "Security & compliance plan",
      "Test strategy document",
    ],
  },
  {
    phase: "Phase 3: Development & Testing",
    duration: "3-5 weeks",
    description: "Bot development, AI integration, and comprehensive testing",
    milestones: [
      "Development kickoff",
      "Unit testing completed",
      "UAT environment ready",
      "Production readiness review",
    ],
    deliverables: [
      "Developed automation solution",
      "Test cases & results",
      "Deployment guide",
      "Operations manual",
    ],
  },
  {
    phase: "Phase 4: Deployment & Training",
    duration: "1-2 weeks",
    description: "Go-live execution, staff training, and operational transition",
    milestones: [
      "Staff training completed",
      "Production deployment",
      "Cutover execution",
      "Go-live success confirmation",
    ],
    deliverables: [
      "Training materials",
      "Operations runbook",
      "Support documentation",
      "Go-live report",
    ],
  },
  {
    phase: "Phase 5: Optimization & Support",
    duration: "Ongoing",
    description: "Performance monitoring, optimization, and strategic partnership",
    milestones: [
      "Stabilization achieved",
      "Performance baseline established",
      "Optimization opportunities identified",
      "Continuous improvement cycle active",
    ],
    deliverables: [
      "Performance reports",
      "Optimization recommendations",
      "Health check reports",
      "Strategic roadmap updates",
    ],
  },
];

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-section-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".timeline-phase-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0,
        x: (index: number) => (index % 2 === 0 ? -50 : 50),
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 px-8 md:px-20 bg-gradient-to-br from-khaki-light/20 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="timeline-section-title text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Typical Project Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From discovery to full deployment in 6-12 weeks, with ongoing optimization and support
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Horizontal timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-khaki via-earth to-accent rounded-full" />

          {/* Phases Grid */}
          <div className="grid lg:grid-cols-5 gap-6 md:gap-4">
            {timelinePhases.map((timelinePhase, index) => (
              <div key={index} className="timeline-phase-card group">
                {/* Timeline dot */}
                <div className="hidden lg:flex justify-center mb-6">
                  <div className="w-12 h-12 bg-white border-4 border-earth rounded-full flex items-center justify-center text-earth font-bold text-lg z-10 relative">
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl border border-khaki/30 p-6 h-full hover:border-khaki hover:shadow-xl transition-all duration-300 group-hover:scale-105 origin-top">
                  {/* Phase Title */}
                  <h3 className="font-serif text-lg md:text-xl text-earth mb-2 leading-tight">
                    {timelinePhase.phase.split(":")[1].trim()}
                  </h3>

                  {/* Duration Badge */}
                  <div className="inline-block bg-khaki-light text-earth text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {timelinePhase.duration}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {timelinePhase.description}
                  </p>

                  {/* Milestones */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-3">
                      Key Milestones
                    </p>
                    <ul className="space-y-2">
                      {timelinePhase.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <span className="text-khaki-dark font-bold mt-1">✓</span>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-khaki/20">
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-1">
                      {timelinePhase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Note */}
          <div className="mt-16 bg-gradient-to-r from-earth/5 to-khaki/5 rounded-xl border border-khaki/20 p-8">
            <h3 className="font-serif text-2xl text-earth mb-3">
              Flexible Timelines for Your Needs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Accelerated Track:</strong> Fast-track implementations for urgent needs, typically 4-6 weeks with increased resource commitment.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Phased Approach:</strong> Roll out automation across departments in stages, reducing risk and allowing iterative learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
