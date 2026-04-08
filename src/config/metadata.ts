/**
 * Page Metadata Configuration
 * Centralized metadata templates for the fellowship programme website.
 */

import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Gradient Fellows \u2014 STEM to AI Fellowship",
    description:
      "A talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. Micro-stipend, mentorship, and a structured path to your first AI role.",
    keywords: [
      "AI fellowship",
      "STEM to AI",
      "machine learning fellowship",
      "STEM graduates",
      "AI career transition",
    ],
  },
  about: {
    title: "About | Gradient Fellows",
    description:
      "Why we exist: the AI industry needs domain experts, not more CS graduates. Learn about our thesis, our model, and what makes this fellowship different.",
    keywords: [
      "about fellowship",
      "AI talent gap",
      "STEM to ML",
      "fellowship mission",
      "domain experts AI",
    ],
  },
  apply: {
    title: "Apply | Gradient Fellows",
    description:
      "Apply to the Gradient Fellows fellowship. We\u2019re looking for non-CS STEM graduates ready to commit full-time to transitioning into AI & Machine Learning.",
    keywords: [
      "apply AI fellowship",
      "fellowship application",
      "STEM AI programme",
      "ML fellowship apply",
    ],
  },
  blog: {
    title: "Blog | Gradient Fellows",
    description:
      "Insights on the STEM-to-AI transition, machine learning careers, and stories from our fellowship community.",
    keywords: [
      "AI career blog",
      "STEM to AI stories",
      "machine learning career",
      "fellowship blog",
    ],
  },
  projects: {
    title: "Fellowship Projects | Gradient Fellows",
    description:
      "Explore real AI projects built by Gradient Fellows — from computer vision and NLP to autonomous agents and medical imaging.",
    keywords: [
      "AI projects",
      "fellowship projects",
      "machine learning",
      "computer vision",
      "NLP",
      "AI agents",
      "Gradient Fellows",
    ],
  },
  privacy: {
    title: "Privacy Policy | Gradient Fellows",
    description:
      "How Gradient Fellows collects, uses, and protects your personal information. GDPR and CCPA compliant.",
    keywords: [
      "privacy policy",
      "data protection",
      "GDPR",
      "fellowship privacy",
      "Gradient Fellows",
    ],
  },
};

const BASE_URL = "https://gradientfellows.org";

const defaults = {
  siteName: "Gradient Fellows",
  defaultImage: "/og-image.png",
  twitterHandle: "",
};

/** Map page keys to their canonical paths */
const canonicalPaths: Record<string, string> = {
  home: "/",
  about: "/about",
  apply: "/apply",
  blog: "/blog",
  projects: "/projects",
  privacy: "/privacy",
};

export function generateMetadata(
  pageKey: keyof typeof pageMetadata,
  customizations?: Partial<PageMetadata>
): Metadata {
  const page = pageMetadata[pageKey];

  if (!page) {
    return {};
  }

  const title = customizations?.title || page.title;
  const description = customizations?.description || page.description;
  const keywords = customizations?.keywords || page.keywords;
  const canonicalPath = canonicalPaths[pageKey];

  return {
    title,
    description,
    keywords,
    alternates: canonicalPath
      ? { canonical: `${BASE_URL}${canonicalPath}` }
      : undefined,
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
    },
  };
}

export function createPageMetadata(
  baseTitle: string,
  description: string,
  keywords: string[] = [],
  canonicalPath?: string
): Metadata {
  const title = `${baseTitle} | ${defaults.siteName}`;

  return {
    title,
    description,
    keywords,
    alternates: canonicalPath
      ? { canonical: `${BASE_URL}${canonicalPath}` }
      : undefined,
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
    },
  };
}

export { BASE_URL };
