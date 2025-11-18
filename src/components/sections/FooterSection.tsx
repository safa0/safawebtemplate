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
    <footer className="w-full bg-[#E8DCC4] min-h-screen flex flex-col">
      {/* Main Footer Content */}
      <div className="flex-1 flex items-center">
        {/* Logo Section - Left Side */}
        <div className="flex-shrink-0 px-8 md:px-12 lg:px-16 py-12">
          <Link href="/" className="flex items-center gap-6">
            <Image
              src={siteConfig.logo.path}
              alt={siteConfig.logo.alt}
              width={300}
              height={90}
              className="w-48 md:w-64 lg:w-80 h-auto object-contain"
              priority
            />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-[#3E3426]">
              {siteConfig.name}
            </h2>
          </Link>
        </div>

        {/* Right-aligned section with divider and navigation */}
        <div className="flex items-center ml-auto">
          {/* Vertical Divider */}
          <div className="w-px h-64 bg-[#9C8B6C]/20" />

          {/* Navigation Items - Right Side */}
          <nav className="w-auto flex flex-col">
          {navigationItems.map((item, index) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="group relative overflow-hidden block w-full py-6 md:py-8 px-8 md:px-12 lg:px-16"
              >
                <div className="relative z-10 flex items-baseline gap-4">
                  <span className="text-sm md:text-base text-[#9C8B6C] font-light group-hover:text-[#E8DCC4] transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-light text-[#3E3426] group-hover:text-[#E8DCC4] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                {/* Hover background overlay - animates from top to bottom */}
                <div className="absolute inset-0 bg-[#8B7355] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />
              </Link>
              {/* Divider line between items */}
              {index < navigationItems.length - 1 && (
                <div className="w-full h-px bg-[#9C8B6C]/20" />
              )}
            </div>
          ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-[#9C8B6C]/20">
        <div className="flex items-start">
          {/* Contact */}
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-8">
            <h3 className="text-xs font-light text-[#9C8B6C] mb-3 tracking-wider uppercase">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm md:text-base text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-24 bg-[#9C8B6C]/20" />

          {/* Subscribe */}
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-8">
            <h3 className="text-xs font-light text-[#9C8B6C] mb-3 tracking-wider uppercase">
              Subscribe
            </h3>
            {isMounted ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  ref={subscribeRef}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b border-[#9C8B6C]/40 py-2 text-sm text-[#3E3426] placeholder:text-[#9C8B6C]/60 focus:outline-none focus:border-[#8B7355] transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Subscribe"
                >
                  <svg
                    className="w-4 h-4 text-[#3E3426]"
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
                <div className="flex-1 border-b border-[#9C8B6C]/40 py-2" />
              </div>
            )}
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-24 bg-[#9C8B6C]/20" />

          {/* Connect */}
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-8">
            <h3 className="text-xs font-light text-[#9C8B6C] mb-3 tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-24 bg-[#9C8B6C]/20" />

          {/* Others */}
          <div className="flex-1 px-8 md:px-12 lg:px-16 py-8">
            <h3 className="text-xs font-light text-[#9C8B6C] mb-3 tracking-wider uppercase">
              Others
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-8 md:px-12 lg:px-16 py-6 border-t border-[#9C8B6C]/20 text-right">
          <p className="text-xs text-[#9C8B6C]">
            2025 {siteConfig.name} ©
          </p>
        </div>
      </div>
    </footer>
  );
}
