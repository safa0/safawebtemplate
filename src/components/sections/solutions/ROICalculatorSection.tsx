"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoursPerYear, setHoursPerYear] = useState(10000);
  const [costPerHour, setCostPerHour] = useState(25);

  const annualSavings = hoursPerYear * costPerHour;
  const yearOneRoi = ((annualSavings - 150000) / 150000) * 100; // Assuming 150k implementation cost

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".roi-calculator-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
      });

      gsap.from(".roi-calculator-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        },
        scale: 0.95,
        opacity: 0,
      });

      gsap.from(".roi-result-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="roi-calculator-section relative py-24 px-6 md:px-12 bg-gradient-to-b from-khaki-light/30 to-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="roi-calculator-title font-serif text-5xl md:text-6xl text-earth mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the potential savings and return on investment for your organization
          </p>
        </div>

        {/* Calculator Container */}
        <div className="roi-calculator-container bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-khaki-light">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Controls */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Estimated Hours Automated Per Year
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={hoursPerYear}
                  onChange={(e) => setHoursPerYear(parseInt(e.target.value))}
                  className="w-full h-3 bg-khaki-light rounded-lg appearance-none cursor-pointer accent-earth"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5k hours</span>
                  <span className="text-3xl font-serif font-bold text-earth">
                    {hoursPerYear.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-600">100k hours</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Average Hourly Cost (USD)
                </label>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="5"
                  value={costPerHour}
                  onChange={(e) => setCostPerHour(parseInt(e.target.value))}
                  className="w-full h-3 bg-khaki-light rounded-lg appearance-none cursor-pointer accent-earth"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">$15/hr</span>
                  <span className="text-3xl font-serif font-bold text-earth">
                    ${costPerHour}
                  </span>
                  <span className="text-sm text-gray-600">$100/hr</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="roi-result-card bg-khaki-light rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-1">Annual Cost Savings</p>
                <p className="text-4xl font-serif font-bold text-earth">
                  ${annualSavings.toLocaleString()}
                </p>
              </div>

              <div className="roi-result-card bg-khaki rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-1">Year 1 ROI</p>
                <p className="text-4xl font-serif font-bold text-earth">
                  {yearOneRoi.toFixed(0)}%
                </p>
              </div>

              <div className="roi-result-card bg-earth rounded-xl p-6">
                <p className="text-sm text-white mb-1">Payback Period</p>
                <p className="text-4xl font-serif font-bold text-white">
                  {(150000 / (annualSavings / 12)).toFixed(1)} months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer and CTA */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">
            *This is a simplified calculation. Actual results may vary based on process complexity, platform selection, and implementation timeline.
          </p>
          <button className="px-8 py-4 bg-earth text-white rounded-full font-medium hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Get a Detailed Assessment →
          </button>
        </div>
      </div>
    </section>
  );
}
