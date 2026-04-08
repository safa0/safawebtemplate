"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { submitApplication } from "@/app/apply/actions";

gsap.registerPlugin(ScrollTrigger);

type FormData = Record<string, string | File | null>;
type FormErrors = Record<string, string>;

// Consolidated 3-step form structure
const formSteps = [
  {
    title: "About You",
    description: "Basic info and academic background",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" as const, required: true, placeholder: "e.g., Maria Rodriguez" },
      { name: "email", label: "Email Address", type: "email" as const, required: true, placeholder: "you@university.edu" },
      { name: "country", label: "Country of Residence", type: "text" as const, required: true, placeholder: "e.g., Colombia" },
      { name: "degree", label: "Degree (e.g., BSc Physics)", type: "text" as const, required: true, placeholder: "e.g., BSc Materials Engineering" },
      { name: "university", label: "University", type: "text" as const, required: true, placeholder: "e.g., Universidad Nacional" },
      { name: "graduationYear", label: "Graduation Year", type: "text" as const, required: true, placeholder: "e.g., 2024" },
    ],
  },
  {
    title: "Your Story",
    description: "Be honest, not polished. We read every word.",
    fields: [
      {
        name: "whyAI",
        label: "Why do you want to transition into AI/ML?",
        type: "textarea" as const,
        required: true,
        placeholder: "What drew you to AI? What excites you about machine learning? How does it connect to your STEM background?",
        hint: "200\u2013400 words",
        maxWords: 400,
      },
      {
        name: "whatBuild",
        label: "If you could build anything with ML, what would it be?",
        type: "textarea" as const,
        required: true,
        placeholder: "Dream big. We want to see how you think about problems, not whether you have the right answer.",
        hint: "200\u2013400 words",
        maxWords: 400,
      },
    ],
  },
  {
    title: "Documents & Availability",
    description: "Almost done. Upload your documents and confirm your availability.",
    fields: [
      {
        name: "transcript",
        label: "Academic Transcript or Degree Certificate",
        type: "file" as const,
        required: true,
        hint: "PDF format, max 5MB",
      },
      {
        name: "cv",
        label: "CV / Resume (optional)",
        type: "file" as const,
        required: false,
        hint: "PDF format, max 2 pages. Not required \u2014 your answers above matter more.",
      },
      {
        name: "startDate",
        label: "Earliest available start date",
        type: "text" as const,
        required: true,
        placeholder: "e.g., September 2026",
      },
      {
        name: "hoursConfirm",
        label: "Can you commit 50 hours per week?",
        type: "select" as const,
        required: true,
        options: ["Yes", "Yes, with part-time work alongside", "I need to discuss this"],
      },
      {
        name: "englishLevel",
        label: "English proficiency",
        type: "select" as const,
        required: true,
        options: ["Native", "Fluent (C1/C2)", "Working proficiency (B2)", "Intermediate (B1)"],
      },
    ],
  },
];

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function ApplicationFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep = (): boolean => {
    const step = formSteps[currentStep];
    const newErrors: FormErrors = {};

    for (const field of step.fields) {
      if (!field.required) continue;

      const value = formData[field.name];

      if (field.type === "file") {
        if (!value) {
          newErrors[field.name] = "This document is required";
        }
      } else if (field.type === "select") {
        if (!value || value === "") {
          newErrors[field.name] = "Please select an option";
        }
      } else {
        if (!value || (typeof value === "string" && value.trim() === "")) {
          newErrors[field.name] = "This field is required";
        }
        // Email validation
        if (field.type === "email" && value && typeof value === "string") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors[field.name] = "Please enter a valid email address";
          }
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep < formSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      // Scroll form into view
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const submitData = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        if (value instanceof File) {
          submitData.append(key, value);
        } else if (value !== null) {
          submitData.append(key, value);
        }
      }

      const result = await submitApplication(submitData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error);
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="text-dark/60 text-lg leading-relaxed mb-6">
            We review every application personally. You&apos;ll hear back within
            2 weeks with next steps.
          </p>
          <div className="p-4 rounded-xl bg-khaki-light/50 text-sm text-dark/50">
            <strong className="text-dark/70">What happens next:</strong> If your
            application is a good fit, we&apos;ll invite you for a 30-minute
            informal conversation. No interview prep needed.
          </div>
        </div>
      </section>
    );
  }

  const currentStepData = formSteps[currentStep];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white section-padding-large"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="form-header text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-3">
            {siteConfig.applicationForm.title}
          </h2>
          <p className="text-dark/60">
            Takes about 15 minutes. Be honest, not polished.
          </p>
        </div>

        {/* Progress — 3 steps */}
        <div className="flex items-center gap-3 mb-10">
          {formSteps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => {
                if (index < currentStep) setCurrentStep(index);
              }}
              className={`flex-1 text-left transition-all ${index <= currentStep ? "cursor-pointer" : "cursor-default"
                }`}
            >
              <div
                className={`h-1.5 rounded-full mb-2 transition-colors duration-300 ${index < currentStep
                    ? "bg-accent"
                    : index === currentStep
                      ? "bg-accent"
                      : "bg-earth/15"
                  }`}
              />
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transition-colors ${index < currentStep
                      ? "bg-accent text-white"
                      : index === currentStep
                        ? "bg-accent/10 text-accent"
                        : "bg-earth/10 text-dark/30"
                    }`}
                >
                  {index < currentStep ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <span
                  className={`text-xs font-medium hidden sm:block ${index === currentStep ? "text-dark" : "text-dark/40"
                    }`}
                >
                  {step.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Step header */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-dark mb-1">
            {currentStepData.title}
          </h3>
          <p className="text-sm text-dark/50">{currentStepData.description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            {currentStepData.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-dark mb-1.5"
                >
                  {field.label}
                  {!field.required && (
                    <span className="text-dark/30 ml-1 font-normal">
                      (optional)
                    </span>
                  )}
                </label>

                {"hint" in field && field.hint && (
                  <p className="text-xs text-dark/40 mb-2">{field.hint}</p>
                )}

                {field.type === "textarea" ? (
                  <div>
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={5}
                      value={(formData[field.name] as string) || ""}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-lg border bg-khaki-light/20 text-dark placeholder:text-dark/25 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none ${errors[field.name]
                          ? "border-red-400"
                          : "border-earth/15"
                        }`}
                      placeholder={"placeholder" in field ? field.placeholder : ""}
                    />
                    {/* Word count */}
                    {"maxWords" in field && (
                      <div className="flex justify-end mt-1">
                        <span
                          className={`text-xs ${countWords(
                            (formData[field.name] as string) || ""
                          ) > (field.maxWords || 400)
                              ? "text-red-400"
                              : "text-dark/30"
                            }`}
                        >
                          {countWords(
                            (formData[field.name] as string) || ""
                          )}{" "}
                          / {field.maxWords} words
                        </span>
                      </div>
                    )}
                  </div>
                ) : field.type === "file" ? (
                  <div>
                    <label
                      htmlFor={field.name}
                      className={`flex items-center justify-center gap-3 px-4 py-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${formData[field.name]
                          ? "border-accent/30 bg-accent/5"
                          : errors[field.name]
                            ? "border-red-400 bg-red-50"
                            : "border-earth/15 bg-khaki-light/20 hover:border-accent/30"
                        }`}
                    >
                      {formData[field.name] ? (
                        <>
                          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-dark font-medium">
                            {(formData[field.name] as File).name}
                          </span>
                          <span className="text-xs text-dark/40">
                            ({Math.round((formData[field.name] as File).size / 1024)}KB)
                          </span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 text-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-sm text-dark/40">
                            Click to upload PDF
                          </span>
                        </>
                      )}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        handleInputChange(
                          field.name,
                          e.target.files?.[0] || null
                        )
                      }
                    />
                  </div>
                ) : field.type === "select" && "options" in field ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-lg border bg-khaki-light/20 text-dark focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors ${errors[field.name]
                        ? "border-red-400"
                        : "border-earth/15"
                      }`}
                  >
                    <option value="">Select...</option>
                    {field.options.map((opt: string) => (
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
                    value={(formData[field.name] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-lg border bg-khaki-light/20 text-dark placeholder:text-dark/25 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors ${errors[field.name]
                        ? "border-red-400"
                        : "border-earth/15"
                      }`}
                    placeholder={"placeholder" in field ? field.placeholder : ""}
                  />
                )}

                {/* Error message */}
                {errors[field.name] && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Submit error */}
          {submitError && (
            <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
              {submitError}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-earth/10">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${currentStep === 0
                  ? "text-dark/20 cursor-not-allowed"
                  : "text-dark/60 hover:text-dark hover:bg-khaki-light"
                }`}
            >
              &larr; Back
            </button>

            {currentStep < formSteps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 transition-all"
              >
                Continue &rarr;
              </button>
            ) : (
              <div className="flex flex-col items-end gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send My Application"
                  )}
                </button>
                <span className="text-xs text-dark/30">
                  We never share your information
                </span>
              </div>
            )}
          </div>

          {/* Step indicator */}
          <div className="text-center mt-4 text-xs text-dark/30">
            Step {currentStep + 1} of {formSteps.length}
          </div>
        </form>
      </div>
    </section>
  );
}
