"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonials-section w-full bg-khaki-light section-padding-large"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
            Fellow Stories
          </h2>
          <p className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto">
            Hear from people who&apos;ve made the transition.
          </p>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={`testimonial-${index}`}
              className="testimonial-card p-8 rounded-2xl bg-white border border-earth/10 hover:shadow-lg transition-all duration-300"
            >
              {/* Quote */}
              <div className="text-3xl text-accent/30 mb-4">&ldquo;</div>
              <p className="text-dark/70 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-khaki/10 flex items-center justify-center text-dark/40 text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark/50">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder cards for future testimonials */}
          {[1, 2].map((i) => (
            <div
              key={`placeholder-${i}`}
              className="testimonial-card p-8 rounded-2xl border-2 border-dashed border-earth/10 flex items-center justify-center min-h-[200px]"
            >
              <div className="text-center">
                <div className="text-dark/20 text-sm font-medium">
                  Your story could be here
                </div>
                <div className="text-dark/10 text-xs mt-1">
                  Applications open
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
