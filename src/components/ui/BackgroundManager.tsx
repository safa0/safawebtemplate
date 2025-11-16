"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type BackgroundType = "floral" | "concrete" | "neutral";

export function BackgroundManager() {
  const [activeBg, setActiveBg] = useState<BackgroundType>("floral");

  useEffect(() => {
    const sections = [
      { trigger: ".hero-section", bg: "floral" as BackgroundType },
      { trigger: ".mission-section", bg: "floral" as BackgroundType },
      { trigger: ".services-section", bg: "concrete" as BackgroundType },
      { trigger: ".featured-work-section", bg: "neutral" as BackgroundType },
      { trigger: ".footer-section", bg: "neutral" as BackgroundType },
    ];

    sections.forEach(({ trigger, bg }) => {
      ScrollTrigger.create({
        trigger,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActiveBg(bg),
        onEnterBack: () => setActiveBg(bg),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000 ${
          activeBg === "floral" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
        }}
      />
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000 ${
          activeBg === "concrete" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')",
        }}
      />
      <div
        className={`fixed inset-0 -z-10 bg-khaki-light transition-opacity duration-1000 ${
          activeBg === "neutral" ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
