"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-midnight/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg md:text-xl font-medium text-midnight pr-8 group-hover:text-coral transition-colors duration-200">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "bg-coral border-coral text-white rotate-45"
              : "border-midnight/20 text-midnight/40 group-hover:border-coral group-hover:text-coral"
          }`}
        >
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
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-midnight/60 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-list", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="faq-section w-full bg-white section-padding-large"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="faq-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-midnight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-midnight/60">
            Everything you need to know before applying.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {siteConfig.faq.map((item, index) => (
            <FAQItem
              key={`faq-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
