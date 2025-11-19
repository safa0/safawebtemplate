"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function FooterSection() {
  const subscribeRef = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", subscribeRef.current?.value);
  };

  const navigationItems = [
    { number: "01.", label: "Home", href: "/" },
    { number: "02.", label: "About", href: "/about" },
    { number: "03.", label: "Work", href: "/work" },
    { number: "04.", label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-khaki-light min-h-[80vh] md:min-h-screen flex flex-col">
      {/* Main Footer Content */}
      <div className="flex-1 flex flex-col md:flex-row items-start md:items-center py-12 md:py-0">
        {/* Logo Section - Top on mobile, Left on desktop */}
        <div className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16 pb-8 md:py-12 w-full md:w-auto">
          <Link href="/" className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Image
              src={siteConfig.logo.path}
              alt={siteConfig.logo.alt}
              width={300}
              height={90}
              className="w-32 sm:w-40 md:w-48 lg:w-64 xl:w-80 h-auto object-contain"
              priority
            />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-earth">
              {siteConfig.name}
            </h2>
          </Link>
        </div>

        {/* Right-aligned section with divider and navigation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto md:ml-auto">
          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block w-px h-64 bg-earth/20" />

          {/* Navigation Items - Stacked on mobile, vertical on desktop */}
          <nav className="w-full md:w-auto flex flex-col">
          {navigationItems.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="group relative overflow-hidden block w-full py-4 sm:py-5 md:py-6 lg:py-8 px-6 sm:px-8 md:px-12 lg:px-16"
              >
                <div className="relative z-10 flex items-baseline gap-3 sm:gap-4">
                  <span className="text-xs sm:text-sm md:text-base text-khaki font-light group-hover:text-khaki-light transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-earth group-hover:text-khaki-light transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                {/* Hover/Active background overlay - animates from top to bottom */}
                <div className="absolute inset-0 bg-khaki-dark origin-top scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 transition-transform duration-500 ease-out z-0" />
              </Link>
              {/* Divider line between items */}
              {index < navigationItems.length - 1 && (
                <div className="w-full h-px bg-khaki/20" />
              )}
            </div>
          ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-khaki/20">
        {/* Mobile: Stack vertically, Desktop: Horizontal with dividers */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-start">
          {/* Contact */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b sm:border-b-0 sm:border-r lg:border-r-0 border-khaki/20">
            <h3 className="text-xs font-light text-khaki mb-3 tracking-wider uppercase">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm md:text-base text-earth hover:text-khaki-dark transition-colors duration-300 break-all"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-24 bg-khaki/20" />

          {/* Subscribe */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b sm:border-b-0 border-khaki/20">
            <h3 className="text-xs font-light text-khaki mb-3 tracking-wider uppercase">
              Subscribe
            </h3>
            {isMounted ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  ref={subscribeRef}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b border-khaki/40 py-2 text-sm text-earth placeholder:text-khaki/60 focus:outline-none focus:border-khaki-dark transition-colors duration-300 min-w-0"
                  required
                />
                <button
                  type="submit"
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-4 h-4 text-earth"
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
                <div className="flex-1 border-b border-khaki/40 py-2" />
              </div>
            )}
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-24 bg-khaki/20" />

          {/* Connect */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b sm:border-b-0 sm:border-r lg:border-r-0 border-khaki/20">
            <h3 className="text-xs font-light text-khaki mb-3 tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-earth hover:text-khaki-dark active:text-khaki-dark transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-earth hover:text-khaki-dark active:text-khaki-dark transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block w-px h-24 bg-khaki/20" />

          {/* Others */}
          <div className="flex-1 w-full px-6 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
            <h3 className="text-xs font-light text-khaki mb-3 tracking-wider uppercase">
              Others
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-earth hover:text-khaki-dark active:text-khaki-dark transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-6 border-t border-khaki/20 text-center sm:text-right">
          <p className="text-xs text-khaki">
            2025 {siteConfig.name} ©
          </p>
        </div>
      </div>
    </footer>
  );
}
