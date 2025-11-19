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
    title: "Enterprise Automation Solutions",
    description: "Transform your operations with Ansyn.ai - the intelligent automation platform for enterprise. Reduce costs, increase efficiency, and scale with confidence.",
    keywords: ["enterprise automation", "RPA", "intelligent automation", "process automation", "workflow automation"],
  },
  about: {
    title: "About Ansyn.ai | Enterprise Automation Leaders",
    description: "Learn about Ansyn.ai - pioneers in enterprise automation since 2020. Meet our leadership team and discover how we're transforming operations through intelligent automation.",
    keywords: ["about Ansyn.ai", "enterprise automation", "RPA leaders", "automation company", "company story"],
  },
  contact: {
    title: "Contact Us | Ansyn.ai - Get in Touch",
    description: "Get in touch with Ansyn.ai to discuss your automation needs. Schedule a free consultation and discover how we can transform your operations.",
    keywords: ["contact Ansyn.ai", "automation consultation", "get in touch", "schedule meeting", "automation assessment"],
  },
  blog: {
    title: "Automation Insights & Best Practices Blog",
    description: "Expert insights on enterprise automation, RPA, and AI. Learn best practices, case studies, and industry trends from the Ansyn.ai team.",
    keywords: ["automation blog", "RPA insights", "automation best practices", "enterprise automation articles", "AI automation"],
  },
  solutions: {
    title: "Automation Solutions | RPA & AI-Powered Workflows",
    description: "Comprehensive automation solutions powered by RPA, AI, and intelligent workflows. Transform your enterprise operations with Ansyn.ai.",
    keywords: ["automation solutions", "RPA solutions", "AI workflow automation", "enterprise automation platform", "intelligent automation"],
  },
  industries: {
    title: "Industry-Specific Automation Solutions",
    description: "Tailored automation solutions for Financial Services, Healthcare, Manufacturing, Retail, and Professional Services. Industry expertise meets intelligent automation.",
    keywords: ["industry automation", "financial automation", "healthcare automation", "manufacturing automation", "retail automation"],
  },
  "why-automate": {
    title: "Why Automate? | Benefits & ROI of Enterprise Automation",
    description: "Discover the transformative benefits of enterprise automation: cost reduction, improved accuracy, scalability, and faster time-to-market. Calculate your ROI.",
    keywords: ["why automate", "automation benefits", "automation ROI", "cost reduction", "process efficiency"],
  },
  "how-we-work": {
    title: "Our Methodology | How We Deliver Automation Excellence",
    description: "Our proven 5-step methodology ensures successful automation implementation: Discover, Design, Develop, Deploy, and Deliver. Partner with confidence.",
    keywords: ["automation methodology", "implementation process", "automation delivery", "project methodology", "automation approach"],
  },
  privacy: {
    title: "Privacy Policy | Ansyn.ai",
    description: "Learn how Ansyn.ai collects, uses, and protects your personal information. Our commitment to privacy and data security.",
    keywords: ["privacy policy", "data protection", "privacy practices", "data security", "information security"],
  },
};

/**
 * Default metadata values
 */
const defaults = {
  siteName: "Ansyn.ai",
  defaultImage: "/og-image.png",
  twitterHandle: "@ansynai",
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
