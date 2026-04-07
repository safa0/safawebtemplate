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
    title: "[Programme Name] \u2014 STEM to AI Fellowship",
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
    title: "About | [Programme Name]",
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
    title: "Apply | [Programme Name]",
    description:
      "Apply to the [Programme Name] fellowship. We\u2019re looking for non-CS STEM graduates ready to commit full-time to transitioning into AI & Machine Learning.",
    keywords: [
      "apply AI fellowship",
      "fellowship application",
      "STEM AI programme",
      "ML fellowship apply",
    ],
  },
  blog: {
    title: "Blog | [Programme Name]",
    description:
      "Insights on the STEM-to-AI transition, machine learning careers, and stories from our fellowship community.",
    keywords: [
      "AI career blog",
      "STEM to AI stories",
      "machine learning career",
      "fellowship blog",
    ],
  },
};

const defaults = {
  siteName: "[Programme Name]",
  defaultImage: "/og-image.png",
  twitterHandle: "",
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
    },
  };
}

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
    },
  };
}
