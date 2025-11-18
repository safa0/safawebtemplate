"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ROIScenario {
  label: string;
  hours: number;
  hourlyRate: number;
  automationCost: number;
  year: number;
}

const roiScenarios: ROIScenario[] = [
  {
    label: "Small Process",
    hours: 20,
    hourlyRate: 50,
    automationCost: 15000,
    year: 1,
  },
  {
    label: "Medium Process",
    hours: 100,
    hourlyRate: 60,
    automationCost: 50000,
    year: 1,
  },
  {
    label: "Large Process",
    hours: 500,
    hourlyRate: 65,
    automationCost: 150000,
    year: 1,
  },
  {
    label: "Enterprise Program",
    hours: 2000,
    hourlyRate: 70,
    automationCost: 400000,
    year: 1,
  },
];

function ROICalculator() {
  const [selectedScenario, setSelectedScenario] = useState(1);
  const scenario = roiScenarios[selectedScenario];

  // Calculate annual savings
  const workingDaysPerYear = 250;
  const annualHours = scenario.hours * workingDaysPerYear;
  const annualSavings = annualHours * scenario.hourlyRate;
  const firstYearProfit = annualSavings - scenario.automationCost;
  const roiPercentage = (firstYearProfit / scenario.automationCost) * 100;
  const breakEvenMonths = (scenario.automationCost / (annualSavings / 12)).toFixed(1);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="font-serif text-3xl md:text-4xl text-earth mb-8">
          Calculate Your ROI
        </h3>

        <div className="space-y-6 mb-8">
          {roiScenarios.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setSelectedScenario(idx)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedScenario === idx
                  ? "border-earth bg-earth/5"
                  : "border-khaki/20 bg-white hover:border-khaki/50"
              }`}
            >
              <p className="font-semibold text-earth mb-2">{s.label}</p>
              <p className="text-sm text-gray-600">
                {s.hours} hours/day • ${s.automationCost.toLocaleString()} implementation
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-earth/10 to-khaki/10 rounded-2xl p-8 border border-earth/20">
          <p className="text-sm text-gray-600 mb-2">Annual Hours Automated</p>
          <p className="text-4xl font-bold text-earth mb-6">
            {annualHours.toLocaleString()}
          </p>

          <p className="text-sm text-gray-600 mb-2">Annual Cost Savings</p>
          <p className="text-4xl font-bold text-green-600 mb-6">
            ${annualSavings.toLocaleString()}
          </p>

          <div className="border-t border-earth/20 pt-6">
            <p className="text-sm text-gray-600 mb-2">Implementation Cost</p>
            <p className="text-2xl font-bold text-gray-800 mb-6">
              ${scenario.automationCost.toLocaleString()}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-xs text-blue-700 font-medium mb-1">Break-Even Point</p>
                <p className="text-2xl font-bold text-blue-700">{breakEvenMonths}</p>
                <p className="text-xs text-blue-700">months</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-xs text-green-700 font-medium mb-1">Year 1 ROI</p>
                <p className="text-2xl font-bold text-green-700">{roiPercentage.toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-khaki/20 rounded-2xl p-6 md:p-8">
          <p className="text-sm font-semibold text-earth mb-3">Year 1 Net Profit</p>
          <p className="text-4xl font-bold text-green-600">
            ${firstYearProfit.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 mt-4">
            By year 5, cumulative savings exceed ${(annualSavings * 5 - scenario.automationCost).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".roi-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });

      gsap.from(".roi-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="roi-calculator-section w-full py-20 md:py-32 px-8 md:px-20 bg-khaki-light/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="roi-title mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-earth mb-4">
            ROI Examples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore realistic scenarios across different process sizes and complexity levels
          </p>
        </div>

        <div className="roi-content">
          <ROICalculator />
        </div>

        {/* Key insights */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-khaki/20">
            <p className="text-3xl font-bold text-earth mb-3">98%</p>
            <p className="font-semibold text-gray-800 mb-2">Predictability</p>
            <p className="text-gray-600 text-sm">
              ROI calculations are highly predictable based on process characteristics
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-khaki/20">
            <p className="text-3xl font-bold text-earth mb-3">6-9 mo</p>
            <p className="font-semibold text-gray-800 mb-2">Average Break-Even</p>
            <p className="text-gray-600 text-sm">
              Most organizations break even within 6-9 months of implementation
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-khaki/20">
            <p className="text-3xl font-bold text-earth mb-3">5+</p>
            <p className="font-semibold text-gray-800 mb-2">Year Payback Window</p>
            <p className="text-gray-600 text-sm">
              Long-term value continues compounding for 5+ years post-implementation
            </p>
          </div>
        </div>

        {/* ROI methodology note */}
        <div className="mt-12 md:mt-16 bg-blue-50 rounded-2xl border border-blue-200 p-8">
          <p className="text-sm font-semibold text-blue-900 mb-3">ROI Calculation Methodology</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Our calculations use conservative estimates: 250 working days/year, linear cost structures, and standard hourly rates. Actual ROI often exceeds these projections when factoring in productivity gains, reduced errors, faster throughput, and compound benefits across multiple processes.
          </p>
          <p className="text-xs text-blue-800">
            * Results based on 500+ implementations across diverse industries. Individual results may vary based on process complexity, integration requirements, and change management effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
}
