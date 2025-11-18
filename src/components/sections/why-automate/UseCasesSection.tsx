"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseCase {
  id: string;
  title: string;
  industry: string;
  before: {
    time: string;
    accuracy: string;
    cost: string;
    description: string;
  };
  after: {
    time: string;
    accuracy: string;
    cost: string;
    description: string;
  };
  improvement: {
    timeReduction: string;
    costSavings: string;
    roiTimeline: string;
  };
}

const useCases: UseCase[] = [
  {
    id: "invoicing",
    title: "Invoice Processing & Approval",
    industry: "Finance & Accounting",
    before: {
      time: "5-7 days",
      accuracy: "92%",
      cost: "$2.50/invoice",
      description: "Manual invoice entry, verification, and approval routing across multiple stakeholders",
    },
    after: {
      time: "2-4 hours",
      accuracy: "99.8%",
      cost: "$0.15/invoice",
      description: "Automated data extraction, validation, and approval workflows with intelligent routing",
    },
    improvement: {
      timeReduction: "96% faster",
      costSavings: "94% reduction",
      roiTimeline: "4 months",
    },
  },
  {
    id: "claims",
    title: "Insurance Claims Processing",
    industry: "Insurance",
    before: {
      time: "21 days",
      accuracy: "88%",
      cost: "$50/claim",
      description: "Manual document collection, verification, and processing with multiple touchpoints",
    },
    after: {
      time: "2 days",
      accuracy: "99.5%",
      cost: "$8/claim",
      description: "Automated document collection, OCR, validation, and decision-making with escalation",
    },
    improvement: {
      timeReduction: "90% faster",
      costSavings: "84% reduction",
      roiTimeline: "5 months",
    },
  },
  {
    id: "hr",
    title: "HR Employee Onboarding",
    industry: "Human Resources",
    before: {
      time: "30 days",
      accuracy: "85%",
      cost: "$400/employee",
      description: "Manual form filling, system access setup, training scheduling, and documentation",
    },
    after: {
      time: "1 day",
      accuracy: "99%",
      cost: "$80/employee",
      description: "Automated provisioning, system setup, training assignment, and compliance documentation",
    },
    improvement: {
      timeReduction: "97% faster",
      costSavings: "80% reduction",
      roiTimeline: "3 months",
    },
  },
  {
    id: "orders",
    title: "Order Fulfillment & Shipping",
    industry: "E-commerce & Retail",
    before: {
      time: "8 hours",
      accuracy: "91%",
      cost: "$3/order",
      description: "Manual order entry, inventory checking, picking, and shipping label generation",
    },
    after: {
      time: "15 minutes",
      accuracy: "99.9%",
      cost: "$0.50/order",
      description: "Automated order processing, inventory management, picking routes, and label generation",
    },
    improvement: {
      timeReduction: "97% faster",
      costSavings: "83% reduction",
      roiTimeline: "4 months",
    },
  },
];

interface UseCaseCardProps {
  useCase: UseCase;
  isActive: boolean;
  onClick: () => void;
}

function UseCaseCard({ useCase, isActive, onClick }: UseCaseCardProps) {
  return (
    <button
      onClick={onClick}
      className={`use-case-card w-full text-left rounded-2xl border-2 transition-all duration-300 p-8 md:p-10 ${
        isActive
          ? "border-earth bg-white shadow-2xl"
          : "border-khaki/20 bg-white/50 hover:border-khaki/50 hover:shadow-lg"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
            {useCase.industry}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-earth">
            {useCase.title}
          </h3>
        </div>
        {isActive && (
          <div className="flex-shrink-0">
            <div className="inline-block bg-earth text-white rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {isActive && (
        <div className="mt-8 space-y-8 animate-in fade-in duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-red-500">●</span> Before Automation
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Processing Time</p>
                  <p className="text-2xl font-bold text-gray-800">{useCase.before.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Accuracy</p>
                  <p className="text-2xl font-bold text-gray-800">{useCase.before.accuracy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cost per Unit</p>
                  <p className="text-2xl font-bold text-gray-800">{useCase.before.cost}</p>
                </div>
                <p className="text-gray-600 mt-4">{useCase.before.description}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="text-green-500">●</span> After Automation
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Processing Time</p>
                  <p className="text-2xl font-bold text-earth">{useCase.after.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Accuracy</p>
                  <p className="text-2xl font-bold text-earth">{useCase.after.accuracy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cost per Unit</p>
                  <p className="text-2xl font-bold text-earth">{useCase.after.cost}</p>
                </div>
                <p className="text-gray-600 mt-4">{useCase.after.description}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-khaki/20 pt-8">
            <h4 className="font-semibold text-gray-800 mb-6">Key Improvements</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-sm text-green-700 font-medium mb-2">Time Reduction</p>
                <p className="text-3xl font-bold text-green-700">
                  {useCase.improvement.timeReduction}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-sm text-blue-700 font-medium mb-2">Cost Savings</p>
                <p className="text-3xl font-bold text-blue-700">
                  {useCase.improvement.costSavings}
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <p className="text-sm text-purple-700 font-medium mb-2">ROI Timeline</p>
                <p className="text-3xl font-bold text-purple-700">
                  {useCase.improvement.roiTimeline}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}

export function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCase, setActiveCase] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".use-cases-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".use-case-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="use-cases-section w-full py-20 md:py-32 px-8 md:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="use-cases-title mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-earth mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how companies across industries transformed their operations with automation
          </p>
        </div>

        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.id}
              useCase={useCase}
              isActive={activeCase === index}
              onClick={() => setActiveCase(index)}
            />
          ))}
        </div>

        {/* Insight bar */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-khaki-light/20 to-accent/10 rounded-2xl border border-khaki/20 p-8 md:p-12">
          <p className="text-lg text-gray-700 max-w-4xl">
            <span className="font-semibold text-earth">The Pattern:</span> Across all industries and processes, automation consistently delivers 80-95% cost reductions, 4-6x speed improvements, and 99%+ accuracy. The real opportunity lies in identifying which processes to automate first for maximum ROI.
          </p>
        </div>
      </div>
    </section>
  );
}
