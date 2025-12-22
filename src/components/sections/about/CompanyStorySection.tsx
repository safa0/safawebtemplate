"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

export function CompanyStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".story-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".story-stat", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="company-story-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-khaki-light"
    >
      <div className="max-w-5xl w-full">
        <h2 className="story-title font-serif text-5xl md:text-6xl mb-12 text-earth">
          Our Journey
        </h2>

        <div className="story-content grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-earth mb-6">Founded in {siteConfig.company.foundedYear}</h3>
            <p className="text-lg text-khaki-dark leading-relaxed mb-6">
              TinySentinel was born from research proving that intrusion detection can run directly on microcontroller-class IIoT devices. Our founders combine academic rigor with industrial software experience to close the gap between lab results and field-ready security.
            </p>
            <p className="text-lg text-khaki-dark leading-relaxed">
              We are building more than an IDS engine—we are enabling manufacturers, integrators, and critical infrastructure operators to embed trustworthy security without sacrificing latency, energy, or privacy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-earth mb-6">Our Mission</h3>
            <p className="text-lg text-khaki-dark leading-relaxed mb-6">
              Deliver resilient, privacy-first detection on constrained devices—keeping sensitive data local while meeting regulatory expectations and protecting uptime.
            </p>
            <p className="text-lg text-khaki-dark leading-relaxed">
              We believe security must fit the device, not the other way around. Every feature is measured against memory, latency, and operational safety.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="story-stat">
            <div className="text-4xl md:text-5xl font-bold text-earth mb-2">{siteConfig.stats.processesAutomated}</div>
            <p className="text-sm md:text-base text-khaki-dark font-medium">Board Targets</p>
          </div>
          <div className="story-stat">
            <div className="text-4xl md:text-5xl font-bold text-earth mb-2">{siteConfig.stats.hoursSaved}</div>
            <p className="text-sm md:text-base text-khaki-dark font-medium">Detection Accuracy</p>
          </div>
          <div className="story-stat">
            <div className="text-4xl md:text-5xl font-bold text-earth mb-2">{siteConfig.stats.averageROI}</div>
            <p className="text-sm md:text-base text-khaki-dark font-medium">Model Footprint</p>
          </div>
          <div className="story-stat">
            <div className="text-4xl md:text-5xl font-bold text-earth mb-2">{siteConfig.stats.enterpriseClients}</div>
            <p className="text-sm md:text-base text-khaki-dark font-medium">Pilot Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
