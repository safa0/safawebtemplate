"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-headline", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".contact-hero-description", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          scrub: 1,
        },
        y: 30,
        opacity: 0,
      });

      gsap.from(".contact-form-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        x: -30,
        opacity: 0,
        stagger: 0.1,
      });

      gsap.from(".contact-info-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        x: 30,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="contact-section w-full min-h-screen py-20 md:py-32 px-8 md:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="contact-hero-headline font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-earth">
            Get in Touch
          </h1>
          <p className="contact-hero-description text-lg md:text-xl text-khaki-dark max-w-2xl mx-auto leading-relaxed">
            Ready to transform your operations? Let&apos;s discuss how Ansyn can help you achieve operational excellence through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-earth">
              Send us a Message
            </h2>
            <p className="text-khaki-dark mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-form-element">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-earth mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-khaki rounded-lg focus:outline-none focus:border-earth transition-colors"
                />
              </div>

              <div className="contact-form-element">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-earth mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-khaki rounded-lg focus:outline-none focus:border-earth transition-colors"
                />
              </div>

              <div className="contact-form-element">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-earth mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-khaki rounded-lg focus:outline-none focus:border-earth transition-colors"
                />
              </div>

              <div className="contact-form-element">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-earth mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-khaki rounded-lg focus:outline-none focus:border-earth transition-colors"
                />
              </div>

              <div className="contact-form-element">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-earth mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-khaki rounded-lg focus:outline-none focus:border-earth transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="contact-form-element w-full md:w-auto px-12 py-4 bg-earth text-white rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-earth">
              Contact Information
            </h2>
            <p className="text-khaki-dark mb-8">
              Prefer to reach out directly? Use the information below to get in touch with our team.
            </p>

            <div className="space-y-8">
              <div className="contact-info-item">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-khaki-light rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-earth"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-earth mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-khaki-dark hover:text-earth transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-khaki-light rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-earth"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-earth mb-2">
                      Phone
                    </h3>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="text-khaki-dark hover:text-earth transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-khaki-light rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-earth"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-earth mb-2">
                      Response Time
                    </h3>
                    <p className="text-khaki-dark">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-12 p-8 bg-khaki-light rounded-2xl border-2 border-khaki">
              <h3 className="font-serif text-2xl text-earth mb-4">
                Free Automation Assessment
              </h3>
              <p className="text-khaki-dark mb-4">
                Schedule a 45-minute consultation with our experts to identify your highest-ROI automation opportunities.
              </p>
              <ul className="space-y-2 text-khaki-dark">
                <li className="flex items-start gap-2">
                  <span className="text-earth mt-1">✓</span>
                  <span>Process review and opportunity analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-earth mt-1">✓</span>
                  <span>ROI calculation and financial modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-earth mt-1">✓</span>
                  <span>Customized implementation roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

