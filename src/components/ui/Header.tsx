"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigation link is clicked
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="border-b border-gray-900/10 bg-white/50 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="relative w-8 h-8 md:w-10 md:h-10 bg-transparent">
              <Image
                src={siteConfig.logo.path}
                alt={siteConfig.logo.alt}
                fill
                className="object-contain mix-blend-multiply"
                unoptimized
              />
            </div>
            <span className="text-lg md:text-xl font-serif font-bold text-gray-900 hidden sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center divide-x divide-gray-900/10">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 lg:px-6 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Spacer for layout balance */}
          <div className="hidden md:flex items-center gap-4">
            {/* Empty spacer to maintain header layout */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                mobileMenuOpen ? "hidden" : "block"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                mobileMenuOpen ? "block" : "hidden"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-900/10 bg-white/50 backdrop-blur-sm shadow-sm">
          <nav className="flex flex-col divide-y divide-gray-900/10 max-w-7xl mx-auto">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 md:px-8 lg:px-12 py-4 text-gray-700 text-sm font-medium hover:bg-gray-100/50 transition-colors duration-200"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
