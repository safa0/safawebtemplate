"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

type FormData = Record<string, string | File | null>;

export function ApplicationFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sections = siteConfig.applicationForm.sections;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".form-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In production, this would send to an API endpoint / email service
    // For now, simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        ref={sectionRef}
        className="w-full bg-white section-padding-large"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10">
            <svg
              className="w-8 h-8 text-accent"
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
          </div>
          <h2 className="text-3xl font-bold text-dark mb-4">
            Application Received
          </h2>
          <p className="text-dark/60 text-lg leading-relaxed">
            We review every application personally. You&apos;ll hear back within
            2 weeks. In the meantime, feel free to explore our blog or reach out
            at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-accent hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  const currentSection = sections[currentStep];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white section-padding-large"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="form-header text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {siteConfig.applicationForm.title}
          </h2>
          <p className="text-dark/60 text-lg">
            {siteConfig.applicationForm.subtitle}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-10">
          {sections.map((section, index) => (
            <div key={section.title} className="flex-1 flex flex-col gap-2">
              <div
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? "bg-accent" : "bg-earth/20"
                }`}
              />
              <span
                className={`text-xs hidden sm:block transition-colors ${
                  index === currentStep
                    ? "text-dark font-medium"
                    : "text-dark/40"
                }`}
              >
                {section.title}
              </span>
            </div>
          ))}
        </div>

        {/* Current section title */}
        <h3 className="text-xl font-bold text-dark mb-8">
          {currentSection.title}
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {currentSection.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-dark mb-2"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-accent ml-1">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    rows={6}
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-earth/20 bg-khaki-light/30 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
                    placeholder={`Enter your response...`}
                  />
                ) : field.type === "file" ? (
                  <div className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type="file"
                      required={field.required}
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleInputChange(
                          field.name,
                          e.target.files?.[0] || null
                        )
                      }
                      className="w-full px-4 py-3 rounded-lg border border-earth/20 bg-khaki-light/30 text-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-accent/10 file:text-accent hover:file:bg-accent/20 transition-colors"
                    />
                    {formData[field.name] && (
                      <span className="text-xs text-accent mt-1 block">
                        {(formData[field.name] as File).name}
                      </span>
                    )}
                  </div>
                ) : field.type === "select" && "options" in field ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-earth/20 bg-khaki-light/30 text-dark focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  >
                    <option value="">Select an option</option>
                    {(field as { options: string[] }).options.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-earth/20 bg-khaki-light/30 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                    placeholder={field.label}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-earth/10">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                currentStep === 0
                  ? "text-dark/20 cursor-not-allowed"
                  : "text-dark/60 hover:text-dark hover:bg-khaki-light"
              }`}
            >
              &larr; Back
            </button>

            {currentStep < sections.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 transition-all"
              >
                Next: {sections[currentStep + 1].title} &rarr;
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
        </form>

        {/* Step indicator mobile */}
        <div className="text-center mt-6 text-sm text-dark/40">
          Step {currentStep + 1} of {sections.length}
        </div>
      </div>
    </section>
  );
}
