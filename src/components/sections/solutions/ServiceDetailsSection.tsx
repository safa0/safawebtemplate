"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { siteConfig, Service } from "@/config/site";

export function ServiceDetailsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-detail-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.12,
      });

      gsap.from(".service-detail-number", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "top 15%",
          scrub: 1,
        },
        scale: 1.3,
        opacity: 0,
        stagger: 0.1,
      });

      gsap.from(".service-detail-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="service-details-section relative py-24 px-6 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Our 4-Step Solution Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Each service in our automation framework is designed to deliver maximum value and ensure successful implementation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {siteConfig.services.map((serviceItem: Service, index: number) => {
            const service = serviceItem as Service;
            return (
            <div
              key={service.number}
              className="service-detail-item flex flex-col"
            >
              {/* Number Badge */}
              <div className="service-detail-number mb-6">
                <div className="w-20 h-20 bg-khaki-light rounded-full flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-earth">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl md:text-4xl text-earth mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Image if available */}
              {service.hasImage && 'imageUrl' in service && service.imageUrl && (
                <div className="service-detail-image relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Decorative color block if no image */}
              {!service.hasImage && (
                <div
                  className="service-detail-image h-32 rounded-xl shadow-md"
                  style={{
                    backgroundColor: service.background.startsWith("url")
                      ? undefined
                      : service.background,
                  }}
                />
              )}
            </div>
          );
          })}
        </div>

        {/* Features Highlight */}
        <div className="mt-20 pt-20 border-t border-khaki-light">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-serif font-bold text-khaki mb-2">
                300%
              </div>
              <p className="text-gray-700">Average ROI within first year</p>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-khaki mb-2">
                90%
              </div>
              <p className="text-gray-700">Reduction in manual errors</p>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-khaki mb-2">
                6-12
              </div>
              <p className="text-gray-700">Weeks to full deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
