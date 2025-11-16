"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function PageTransition() {
  const [isActive, setIsActive] = useState(false);

  // This component can be triggered via a custom event
  // For now, it's just the structure

  const bars = Array.from({ length: 8 }, (_, i) => i);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[9999] flex pointer-events-none">
          {bars.map((i) => (
            <motion.div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? "bg-accent" : "bg-beige-dark"}`}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.645, 0.045, 0.355, 1],
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
