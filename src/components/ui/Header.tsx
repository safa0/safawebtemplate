"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-earth/10 bg-white/90 backdrop-blur-md shadow-sm"
            : "border-white/10 bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 flex-shrink-0"
          >
            <span className="text-lg md:text-xl font-bold text-dark">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navigation.map((item) => {
              const isApply = item.href === "/apply";

              if (isApply) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="ml-2 px-5 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/80 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 lg:px-5 py-2 text-dark/70 text-sm font-medium hover:text-dark transition-colors duration-200"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark hover:bg-earth/5 rounded-lg transition-colors"
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
        <div className="md:hidden border-b border-earth/10 bg-white/95 backdrop-blur-md shadow-sm">
          <nav className="flex flex-col divide-y divide-earth/10 max-w-7xl mx-auto">
            {siteConfig.navigation.map((item) => {
              const isApply = item.href === "/apply";

              if (isApply) {
                return (
                  <div key={item.href} className="px-4 py-4">
                    <Link
                      href={item.href}
                      className="block w-full text-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/80 transition-colors duration-200"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-4 text-dark/70 text-sm font-medium hover:bg-earth/5 transition-colors duration-200"
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
