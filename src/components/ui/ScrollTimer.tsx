"use client";

import { useEffect, useState } from "react";

export function ScrollTimer() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const updateTimer = () => {
      const scrollProgress =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
      const elapsedSeconds = Math.floor(scrollProgress * 100);
      const minutes = Math.floor(elapsedSeconds / 60);
      const seconds = elapsedSeconds % 60;

      setTime(
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );
    };

    window.addEventListener("scroll", updateTimer);
    updateTimer();

    return () => window.removeEventListener("scroll", updateTimer);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 rounded-xl shadow-2xl z-10">
      <div className="text-4xl font-light tracking-widest">{time}</div>
    </div>
  );
}
