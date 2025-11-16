"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 md:px-12 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.svg"
              alt="FlowForce Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-serif font-bold text-earth">FlowForce</span>
        </Link>

        <nav className="flex flex-row gap-4 md:gap-8">
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
      </div>
    </header>
  );
}
