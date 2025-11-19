"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { teamMembers } from "@/data/team";

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
          {teamMembers.map((member) => (
            <div
              key={member.name}
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
