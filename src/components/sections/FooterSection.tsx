"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterSection() {
  const subscribeRef = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigationItems = [
    { number: "01.", label: "Home", href: "/" },
    { number: "02.", label: "About", href: "/about" },
    { number: "03.", label: "Apply", href: "/apply" },
    { number: "04.", label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="w-full bg-midnight min-h-[60vh] md:min-h-[80vh] flex flex-col">
      {/* Main Footer Content */}
      <div className="flex-1 flex flex-col md:flex-row items-start md:items-center py-12 md:py-0">
        {/* Logo Section */}
        <div className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16 pb-8 md:py-12 w-full md:w-auto">
          <Link
            href="/"
            className="flex flex-col items-start gap-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-slate max-w-xs">
              {siteConfig.tagline}
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto md:ml-auto">
          <div className="hidden md:block w-px h-64 bg-white/10" />

          <nav className="w-full md:w-auto flex flex-col">
            {navigationItems.map((item, index) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="group relative overflow-hidden block w-full py-4 sm:py-5 md:py-6 lg:py-8 px-6 sm:px-8 md:px-12 lg:px-16"
                >
                  <div className="relative z-10 flex items-baseline gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm md:text-base text-slate/60 font-light group-hover:text-coral-light transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/80 group-hover:text-coral-light transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-midnight-light origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />
                </Link>
                {index < navigationItems.length - 1 && (
                  <div className="w-full h-px bg-white/10" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/10">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-start">
          {/* Contact */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b sm:border-b-0 sm:border-r lg:border-r-0 border-white/10">
            <h3 className="text-xs font-light text-slate/60 mb-3 tracking-wider uppercase">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm md:text-base text-white/80 hover:text-coral-light transition-colors duration-300 break-all"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="hidden lg:block w-px h-24 bg-white/10" />

          {/* Stay Updated */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b sm:border-b-0 border-white/10">
            <h3 className="text-xs font-light text-slate/60 mb-3 tracking-wider uppercase">
              Stay Updated
            </h3>
            {isMounted ? (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2"
              >
                <input
                  ref={subscribeRef}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder:text-slate/40 focus:outline-none focus:border-coral transition-colors duration-300 min-w-0"
                  required
                />
                <button
                  type="submit"
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-4 h-4 text-coral"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 h-8">
                <div className="flex-1 border-b border-white/20 py-2" />
              </div>
            )}
          </div>

          <div className="hidden lg:block w-px h-24 bg-white/10" />

          {/* Connect */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
            <h3 className="text-xs font-light text-slate/60 mb-3 tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-coral-light transition-colors duration-300"
                >
                  Twitter / X
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-coral-light transition-colors duration-300"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-coral-light transition-colors duration-300"
                >
                  GitHub
                </a>
              )}
              {!siteConfig.social.twitter &&
                !siteConfig.social.linkedin &&
                !siteConfig.social.github && (
                  <span className="text-sm text-slate/40">Coming soon</span>
                )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-6 border-t border-white/10 text-center sm:text-right">
          <p className="text-xs text-slate/40">
            {new Date().getFullYear()} {siteConfig.name} &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
