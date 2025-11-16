"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 z-50 p-8 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Link
          href="#work"
          className="text-gray-800 text-sm hover:opacity-60 transition-opacity"
        >
          Projects (08) →
        </Link>
        <Link
          href="#about"
          className="text-gray-800 text-sm hover:opacity-60 transition-opacity"
        >
          Who we are →
        </Link>
        <Link
          href="#contact"
          className="text-gray-800 text-sm hover:opacity-60 transition-opacity"
        >
          Get in touch →
        </Link>
      </nav>
    </header>
  );
}
