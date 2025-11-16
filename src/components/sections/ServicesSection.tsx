"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
  {
    number: "1",
    title: "UX/UI Design",
    description:
      "A studio crafting captivating digital experiences that seamlessly blend aesthetics with functionality",
    background:
      "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')",
    textColor: "text-white",
    hasImage: true,
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
  },
  {
    number: "2",
    title: "Dashboard Design",
    description:
      "Built to decode complexity, our dashboards transform data into elegant and intuitive interfaces",
    background:
      "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')",
    textColor: "text-white",
    hasImage: true,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    number: "3",
    title: "Web & App Design",
    description:
      "Crafted for clarity and growth, our web and app experiences are designed to engage and scale seamlessly",
    background: "#E8E3D8",
    textColor: "text-gray-800",
    hasImage: false,
  },
  {
    number: "4",
    title: "Branding Identity",
    description:
      "From strategy and messaging to visual identity, each brand is designed to be scalable, sustainable, and impactful across every digital platform",
    background: "#F5F3EE",
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
      className="services-section flex flex-col md:flex-row min-h-screen"
    >
      {services.map((service) => (
        <div
          key={service.number}
          className="service-card flex-1 min-h-screen relative overflow-hidden flex items-center"
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
