"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined";

function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

function setConsent(value: ConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so the banner doesn't flash on page load
    const timer = setTimeout(() => {
      if (getConsent() === null) {
        setVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-khaki/20 bg-white/95 backdrop-blur-md shadow-lg px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Text */}
          <p className="flex-1 text-sm text-dark/70 leading-relaxed">
            We use essential cookies to keep our site working. No tracking or
            advertising cookies are used.{" "}
            <Link
              href="/privacy#cookies"
              className="underline text-earth hover:text-khaki-dark transition-colors duration-200"
            >
              Learn more
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-dark/50 hover:text-dark transition-colors duration-200 rounded-lg"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2 text-sm font-medium text-white bg-dark rounded-lg hover:bg-dark/85 active:scale-95 transition-all duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
