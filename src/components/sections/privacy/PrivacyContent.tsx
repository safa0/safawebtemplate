"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";

interface PrivacySection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: { subtitle: string; items: string[] }[];
  footer?: string;
}

const sections: PrivacySection[] = [
  {
    title: "1. Who We Are",
    content: `${siteConfig.name} ("we", "us", "our") operates the website gradientfellows.org. We are a talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or apply to our programme.`,
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "Information you provide directly",
        items: [
          "Full name and email address",
          "Academic background (degree, institution, field of study, graduation year)",
          "Essays and written responses submitted in your application",
          "LinkedIn profile URL (optional)",
          "Availability and scheduling preferences",
        ],
      },
      {
        subtitle: "Information collected automatically",
        items: [
          "IP address and approximate geographic location",
          "Browser type, device information, and operating system",
          "Pages visited, time spent, and navigation patterns",
          "Referral source (how you found our website)",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    items: [
      "Evaluate your fellowship application and assess candidacy",
      "Communicate with you about your application status",
      "Send programme-related updates and announcements",
      "Improve our website, application process, and programme",
      "Comply with legal obligations",
      "Aggregate anonymised data for programme reporting and statistics",
    ],
  },
  {
    title: "4. Legal Basis for Processing (GDPR)",
    content:
      "If you are located in the European Economic Area (EEA), we process your personal data under the following legal bases:",
    items: [
      "Contractual necessity — to process your fellowship application and, if accepted, to administer the programme",
      "Legitimate interest — to improve our services, analyse usage patterns, and ensure website security",
      "Consent — for optional marketing communications, which you may withdraw at any time",
    ],
  },
  {
    title: "5. Your Rights Under CCPA",
    content:
      "If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:",
    items: [
      "Right to know — you may request the categories and specific pieces of personal information we have collected about you",
      "Right to delete — you may request that we delete the personal information we have collected from you",
      "Right to opt out of sale — we do not sell your personal information to third parties. No opt-out is required",
      "Right to non-discrimination — we will not discriminate against you for exercising any of your CCPA rights",
    ],
    footer: `To submit a CCPA request, contact us at ${siteConfig.contact.email}. We will verify your identity before processing your request and respond within 45 days.`,
  },
  {
    title: "6. Third-Party Services",
    content:
      "We use a limited number of trusted third-party services to operate our website and programme. These services process data on our behalf under data processing agreements:",
    items: [
      "Vercel — website hosting, deployment, and analytics (vercel.com/legal/privacy-policy)",
      "Resend — transactional email delivery for application confirmations and updates (resend.com/legal/privacy-policy)",
    ],
    footer:
      "We do not sell, rent, or trade your personal information to any third party. We do not use your data for advertising purposes.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your application data for up to 24 months after the application cycle in which you applied. This allows us to consider you for future cohorts and to maintain programme records. After this period, your data is either anonymised for statistical purposes or permanently deleted. You may request earlier deletion at any time (see Section 9).",
  },
  {
    title: "8. Data Security",
    content:
      "We implement appropriate technical and organisational measures to protect your personal information, including encrypted data transmission (TLS/SSL), secure hosting infrastructure, and access controls limiting data access to authorised personnel only. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9. Your Rights (GDPR)",
    content:
      "If you are located in the EEA, you have the following rights regarding your personal data:",
    items: [
      "Access — request a copy of the personal data we hold about you",
      "Rectification — request correction of inaccurate or incomplete data",
      "Erasure — request deletion of your personal data",
      "Restriction — request that we limit how we use your data",
      "Portability — request your data in a structured, machine-readable format",
      "Objection — object to processing based on legitimate interest",
      "Withdraw consent — where processing is based on consent, withdraw it at any time",
      "Lodge a complaint — you have the right to lodge a complaint with your local data protection supervisory authority if you believe your data has been mishandled",
    ],
    footer: `To exercise any of these rights, contact us at ${siteConfig.contact.email}. We will respond within 30 days.`,
  },
  {
    title: "10. Cookies",
    content:
      "Our website uses only essential cookies required for the site to function properly (e.g., session management). We do not use tracking cookies or third-party advertising cookies. Vercel may collect anonymous analytics data as part of its hosting service.",
  },
  {
    title: "11. Children\u2019s Privacy",
    content:
      "Our programme and website are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will promptly delete it.",
  },
  {
    title: "12. International Data Transfers",
    content:
      "Your data may be transferred to and processed in countries outside your country of residence, including the United States, where our hosting and email providers operate. These transfers are protected by appropriate safeguards, including standard contractual clauses and data processing agreements.",
  },
  {
    title: "13. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the \u201cLast updated\u201d date at the top of this page. We encourage you to review this policy periodically.",
  },
  {
    title: "14. Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at ${siteConfig.contact.email}.`,
  },
];

export function PrivacyContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="privacy-header mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-3">
            Privacy Policy
          </h1>
          <p className="text-dark/40 text-sm">
            Last updated: {siteConfig.privacy.lastUpdated}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                {section.title}
              </h2>

              {section.content && (
                <p className="text-dark/60 text-sm md:text-base leading-relaxed mb-3">
                  {section.content}
                </p>
              )}

              {section.subsections?.map((sub) => (
                <div key={sub.subtitle} className="mb-4">
                  <h3 className="text-base md:text-lg font-medium text-dark mb-2">
                    {sub.subtitle}
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {sub.items.map((item) => (
                      <li
                        key={item}
                        className="text-dark/60 text-sm md:text-base leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.items && !section.subsections && (
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-dark/60 text-sm md:text-base leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-dark/60 text-sm md:text-base leading-relaxed mt-3">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
