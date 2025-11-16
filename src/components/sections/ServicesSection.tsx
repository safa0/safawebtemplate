"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
  {
    number: "1",
    title: "Digital Strategy",
    description:
      "Strategic planning that flows with your business vision, creating roadmaps for sustainable digital growth and transformation",
    background:
      "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')",
    textColor: "text-white",
    hasImage: true,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    number: "2",
    title: "Web Development",
    description:
      "Building responsive, scalable web solutions that adapt and flow with your users' needs across all devices",
    background:
      "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
    textColor: "text-white",
    hasImage: true,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    number: "3",
    title: "Cloud Solutions",
    description:
      "Seamless cloud infrastructure that scales naturally with your growth, ensuring reliability and performance",
    background: "#E8DCC4",
    textColor: "text-gray-800",
    hasImage: false,
  },
  {
    number: "4",
    title: "Process Automation",
    description:
      "Streamlining workflows and automating processes to create efficient, flowing systems that save time and resources",
    background: "#D4C4A8",
    textColor: "text-gray-800",
    hasImage: false,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
      });

      gsap.from(".service-number", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 10%",
          scrub: 1,
        },
        scale: 1.5,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section flex flex-col md:flex-row w-full h-full"
    >
      {services.map((service) => (
        <div
          key={service.number}
          className="service-card flex-1 h-full relative overflow-hidden flex items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: service.background.startsWith("url")
                ? service.background
                : undefined,
              backgroundColor: !service.background.startsWith("url")
                ? service.background
                : undefined,
            }}
          />

          <div className={`relative z-10 p-8 md:p-16 ${service.textColor}`}>
            <div className="service-number text-9xl md:text-[15rem] font-light leading-none mb-8 opacity-30">
              {service.number}
            </div>

            <h3 className="font-serif text-4xl md:text-5xl mb-6">
              {service.title}
            </h3>

            <p className="text-lg leading-relaxed max-w-md mb-12">
              {service.description}
            </p>

            {service.hasImage && (
              <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.imageUrl!}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
