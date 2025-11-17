"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyTeaser {
  id: string;
  industry: string;
  company: string;
  challenge: string;
  result: string;
  resultValue: string;
  bgGradient: string;
}

const caseStudies: CaseStudyTeaser[] = [
  {
    id: "case-1",
    industry: "Financial Services",
    company: "Global Investment Bank",
    challenge: "Processing 50,000+ daily invoices manually with 15% error rate",
    result: "Automated 98% of invoice processing with 99.8% accuracy",
    resultValue: "3 Hours",
    bgGradient: "from-blue-900 to-blue-700",
  },
  {
    id: "case-2",
    industry: "Healthcare",
    company: "Regional Hospital Network",
    challenge: "30-day average insurance claims processing time",
    result: "Reduced claims processing to 2 business days",
    resultValue: "15x Faster",
    bgGradient: "from-green-900 to-green-700",
  },
  {
    id: "case-3",
    industry: "Manufacturing",
    company: "Industrial Equipment Supplier",
    challenge: "Manual inventory tracking across 12 warehouses",
    result: "Real-time visibility with automated stock management",
    resultValue: "98% Accuracy",
    bgGradient: "from-amber-900 to-amber-700",
  },
];

export function CaseStudyTeaserSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const studyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Title animation
      gsap.from(".case-study-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      // Case study cards animation
      studyRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 25%",
              scrub: 1,
            },
            x: index % 2 === 0 ? -80 : 80,
            opacity: 0,
          });
        }
      });

      // Animate numbers
      gsap.from(".case-study-number", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="case-study-teaser-section w-full py-20 px-8 bg-khaki-light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="case-study-title font-serif text-4xl md:text-5xl text-earth mb-4">
            Success Stories Across Industries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven results delivering measurable ROI and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              ref={(el) => {
                if (el) studyRefs.current[index] = el;
              }}
              className={`case-study-card bg-gradient-to-br ${study.bgGradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16" />

              <div className="relative z-10">
                {/* Industry Tag */}
                <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-semibold px-4 py-1 rounded-full mb-4">
                  {study.industry}
                </span>

                {/* Company Name */}
                <h3 className="font-serif text-2xl md:text-3xl mb-6 leading-tight">
                  {study.company}
                </h3>

                {/* Challenge */}
                <div className="mb-6">
                  <p className="text-white text-opacity-80 text-sm uppercase tracking-wide font-semibold mb-2">
                    The Challenge
                  </p>
                  <p className="text-base leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-1 bg-white bg-opacity-30 mb-6" />

                {/* Result */}
                <div className="mb-6">
                  <p className="text-white text-opacity-80 text-sm uppercase tracking-wide font-semibold mb-2">
                    The Result
                  </p>
                  <p className="text-base leading-relaxed mb-4">
                    {study.result}
                  </p>
                  <div className="case-study-number text-4xl md:text-5xl font-serif font-bold text-khaki-light">
                    {study.resultValue}
                  </div>
                </div>

                {/* View Case Study Link */}
                <button className="mt-6 inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300 group">
                  Read Full Case Study
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            Interested in seeing how we can transform your industry?
          </p>
          <button className="px-8 py-3 bg-earth text-white rounded-full font-medium hover:bg-khaki-dark transition-colors duration-300 inline-flex items-center gap-2">
            View All Case Studies
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
