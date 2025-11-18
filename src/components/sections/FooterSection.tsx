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
      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={siteConfig.logo.path}
                alt={siteConfig.logo.alt}
                width={400}
                height={120}
                className="w-64 md:w-80 lg:w-96 h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-6 md:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden block py-2"
              >
                <div className="relative z-10 flex items-baseline gap-4">
                  <span className="text-base md:text-lg text-[#9C8B6C] font-light group-hover:text-[#E8DCC4] transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-light text-[#3E3426] group-hover:text-[#E8DCC4] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                {/* Hover background overlay - animates from top to bottom */}
                <div className="absolute inset-0 bg-[#8B7355] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-[#9C8B6C]/20">
        <div className="px-8 md:px-16 lg:px-24 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-light text-[#9C8B6C] mb-4 tracking-wider">
                Contact
              </h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-base md:text-lg text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-sm font-light text-[#9C8B6C] mb-4 tracking-wider">
                Subscribe
              </h3>
              {isMounted ? (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    ref={subscribeRef}
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-b border-[#9C8B6C]/40 py-2 text-[#3E3426] placeholder:text-[#9C8B6C]/60 focus:outline-none focus:border-[#8B7355] transition-colors duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Subscribe"
                  >
                    <svg
                      className="w-5 h-5 text-[#3E3426]"
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
                <div className="flex items-center gap-2 h-10">
                  <div className="flex-1 border-b border-[#9C8B6C]/40 py-2" />
                </div>
              )}
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-light text-[#9C8B6C] mb-4 tracking-wider">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-sm font-light text-[#9C8B6C] mb-4 tracking-wider">
                Others
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/privacy"
                  className="text-base text-[#3E3426] hover:text-[#8B7355] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#9C8B6C]/20 text-right">
            <p className="text-sm text-[#9C8B6C]">
              2025 {siteConfig.name} ©
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
