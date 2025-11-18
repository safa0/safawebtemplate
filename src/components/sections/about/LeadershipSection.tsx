"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Chen",
    title: "Chief Executive Officer & Co-Founder",
    bio: "20+ years in enterprise software and process automation. Former VP of Technology at a Fortune 500 company.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&q=80",
  },
  {
    name: "Michael Rodriguez",
    title: "Chief Technology Officer & Co-Founder",
    bio: "AI and RPA specialist with 18 years of experience. Built automation platforms serving 100+ enterprises.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80",
  },
  {
    name: "Jennifer Park",
    title: "Chief Operating Officer",
    bio: "Operations excellence expert. Previously led digital transformation initiatives at leading consulting firms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&q=80",
  },
  {
    name: "David Thompson",
    title: "Head of Client Success",
    bio: "Client relationships and implementation specialist. Dedicated to ensuring measurable ROI for every partnership.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&q=80",
  },
];

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".leadership-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
        y: 40,
        opacity: 0,
      });

      gsap.from(".team-member-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="leadership-section w-full min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-khaki-light"
    >
      <div className="max-w-6xl w-full">
        <h2 className="leadership-title font-serif text-5xl md:text-6xl mb-4 text-earth">
          Meet Our Leadership
        </h2>
        <p className="text-xl text-khaki-dark mb-16 max-w-2xl">
          Experienced visionaries dedicated to driving transformation through intelligent automation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member-card group"
            >
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-earth mb-2">{member.name}</h3>
              <p className="text-lg font-medium text-accent mb-4">{member.title}</p>
              <p className="text-base text-khaki-dark leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
