/**
 * Page Metadata Configuration
 * Centralized metadata templates for all pages.
 * Provides consistent SEO and social sharing metadata across the site.
 */

import { Metadata } from "next";

/**
 * Page metadata configuration interface
 */
interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Page metadata templates
 */
export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "TinySentinel™ | On-Device Intrusion Detection for IIoT",
    description: "Lightweight AI security that runs directly on microcontroller-class IIoT hardware. Real-time anomaly detection without cloud dependency.",
    keywords: ["tinyml ids", "on-device intrusion detection", "iiot security", "iot anomaly detection", "embedded security"],
  },
  about: {
    title: "About TinySentinel™ | Lightweight AI Security",
    description: "Meet the team behind TinySentinel—research-driven engineers delivering microcontroller-ready intrusion detection for industrial IoT.",
    keywords: ["TinySentinel", "tinyml security", "on-device ids", "iiot cybersecurity", "team"],
  },
  contact: {
    title: "Contact Us | TinySentinel™ - Schedule a Demo",
    description: "Talk with the TinySentinel team about on-device intrusion detection for your IIoT devices. Book a demo or request a validation workshop.",
    keywords: ["contact TinySentinel", "iiot security demo", "on-device ids consultation", "book demo"],
  },
  blog: {
    title: "TinySentinel Insights | Lightweight Security & TinyML",
    description: "Research notes and perspectives on tinyML intrusion detection, embedded cybersecurity, and industrial IoT resilience from the TinySentinel team.",
    keywords: ["tinyml blog", "iot security insights", "embedded anomaly detection", "iiot security research"],
  },
  solutions: {
    title: "Technology | TinySentinel On-Device IDS",
    description: "Discover TinySentinel’s microcontroller-ready IDS pipeline: requirements mapping, feature adaptation, firmware optimization, and field validation.",
    keywords: ["on-device ids", "tinyml intrusion detection", "iiot security technology", "embedded ml security"],
  },
  industries: {
    title: "Industries | Securing Industrial IoT & Edge Platforms",
    description: "How TinySentinel protects industrial manufacturing, system integrators, edge platform vendors, energy and critical infrastructure, and security partners.",
    keywords: ["iiot industries", "industrial security", "edge device security", "critical infrastructure iot", "iot partners"],
  },
  "why-automate": {
    title: "Why On-Device IDS? | TinySentinel Benefits & Proof",
    description: "Understand the case for on-device intrusion detection: privacy, low latency, regulatory readiness, and resilience for resource-constrained IIoT hardware.",
    keywords: ["on-device ids benefits", "iiot security roi", "tinyml ids value", "embedded security"],
  },
  "how-we-work": {
    title: "Methodology | TinySentinel Validation Framework",
    description: "Our research-led delivery: threat scoping, feature/model adaptation, firmware optimization, and real-hardware validation with compliance evidence.",
    keywords: ["tinyml methodology", "iot security process", "ids validation", "embedded model deployment"],
  },
  privacy: {
    title: "Privacy Policy | TinySentinel™",
    description: "Learn how TinySentinel™ handles contact details and demo information while prioritizing security and privacy.",
    keywords: ["privacy policy", "data protection", "iot security", "privacy practices"],
  },
};

/**
 * Default metadata values
 */
const defaults = {
  siteName: "TinySentinel™",
  defaultImage: "/og-image.png",
  twitterHandle: "@tinysentinel",
};

/**
 * Generate metadata for a page
 * @param pageKey - The key from pageMetadata object
 * @param customizations - Optional metadata overrides
 * @returns Next.js Metadata object
 */
export function generateMetadata(
  pageKey: keyof typeof pageMetadata,
  customizations?: Partial<PageMetadata>
): Metadata {
  const page = pageMetadata[pageKey];

  if (!page) {
    console.warn(`Metadata not found for page: ${pageKey}`);
    return {};
  }

  const title = customizations?.title || page.title;
  const description = customizations?.description || page.description;
  const keywords = customizations?.keywords || page.keywords;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      siteName: defaults.siteName,
      type: "website",
      images: [
        {
          url: defaults.defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaults.defaultImage],
      creator: defaults.twitterHandle,
    },
  };
}

/**
 * Helper to generate metadata with custom title suffix
 * @param baseTitle - The base title (e.g., "About Us")
 * @param description - Page description
 * @param keywords - SEO keywords
 * @returns Next.js Metadata object
 */
export function createPageMetadata(
  baseTitle: string,
  description: string,
  keywords: string[] = []
): Metadata {
  const title = `${baseTitle} | ${defaults.siteName}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      siteName: defaults.siteName,
      type: "website",
      images: [
        {
          url: defaults.defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaults.defaultImage],
      creator: defaults.twitterHandle,
    },
  };
}
