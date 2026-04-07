/**
 * Site Configuration
 * =================
 * Central configuration file for the fellowship programme website.
 * Change values here to customize the site without touching individual components.
 */

export const siteConfig = {
  // Brand Identity
  name: "[Programme Name]",
  tagline: "Preparing the next generation for the AI age",
  description:
    "A talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. We identify high-potential scientists and engineers and invest in their transition through mentorship, micro-stipends, and structured learning.",

  // Typography
  fonts: {
    sans: "Space_Grotesk",
  },

  // Logo & Assets
  logo: {
    path: "/logo.png",
    alt: "[Programme Name] Logo",
  },

  // SEO & Metadata
  seo: {
    title: "[Programme Name] — STEM to AI Fellowship",
    description:
      "A talent investment programme for non-CS STEM graduates transitioning into AI & Machine Learning. Micro-stipend, mentorship, and a structured path to your first AI role.",
    keywords: [
      "AI fellowship",
      "STEM to AI",
      "machine learning fellowship",
      "AI career transition",
      "STEM graduates",
      "AI mentorship",
      "ML training programme",
      "non-CS AI",
      "physics to AI",
      "science to machine learning",
    ],
  },

  // Hero Section
  hero: {
    badge: "Applications Open",
    headline: ["Your Science Degree", "Is Your AI Superpower"],
    description:
      "We invest in non-CS STEM graduates making the leap into AI & Machine Learning. Stipend. Mentorship. Structure. No tuition. This isn\u2019t a bootcamp\u2014it\u2019s angel investing for human capital.",
    cta: {
      text: "Apply Now",
      link: "/apply",
    },
    secondaryCta: {
      text: "Learn How It Works",
      link: "#how-it-works",
    },
  },

  // Problem / Market Gap
  problem: {
    title: "The Gap Nobody\u2019s Filling",
    statement:
      "The AI industry has a talent bottleneck, but it\u2019s not where most people think. There is no shortage of computer science graduates who can train a model on MNIST. The shortage is in people who understand real-world domains\u2014materials science, biology, physics, chemistry, engineering\u2014and can apply machine learning to problems that actually matter.",
    points: [
      {
        stat: "73%",
        label: "of frontier AI labs report needing more domain experts",
      },
      {
        stat: "$0",
        label: "stipend programmes exist for non-CS STEM \u2192 AI transitions",
      },
      {
        stat: "3\u201312mo",
        label: "is all it takes for a strong STEM grad to become job-ready in ML",
      },
    ],
  },

  // Tiered Model
  tiers: [
    {
      name: "Ignition",
      duration: "3 months",
      stipend: "$200/mo",
      total: "$600",
      description:
        "Entry tier. All fellows start here. Prove your commitment, build foundations, and demonstrate traction.",
      highlights: [
        "ML fundamentals curriculum",
        "Bi-weekly mentor sessions",
        "First portfolio project",
      ],
    },
    {
      name: "Orbit",
      duration: "6 months",
      stipend: "$200/mo",
      total: "$1,200",
      description:
        "Extended on merit after Ignition review. Deepen your skills, tackle real-world problems, build your professional identity.",
      highlights: [
        "Domain-specific ML track",
        "Open-source contributions",
        "Technical writing",
      ],
    },
    {
      name: "Escape Velocity",
      duration: "12 months",
      stipend: "$200/mo",
      total: "$2,400",
      description:
        "Full programme. You\u2019re building serious projects, publishing work, and preparing for the job market.",
      highlights: [
        "Capstone research project",
        "Interview preparation",
        "Industry introductions",
      ],
    },
  ],

  // What Fellows Receive
  benefits: [
    {
      icon: "stipend",
      title: "Monthly Stipend",
      description:
        "$200/month, paid on deliverable completion. Real money, real accountability. We invest in you so you can focus on learning.",
    },
    {
      icon: "mentorship",
      title: "Expert Mentorship",
      description:
        "Bi-weekly 1:1 calls with a working AI/CS professional. Not lectures\u2014strategic guidance, code review, and career advice.",
    },
    {
      icon: "curriculum",
      title: "Structured Curriculum",
      description:
        "A curated learning path from foundations to job-readiness, designed to skip the noise and focus on what the market demands.",
    },
    {
      icon: "portfolio",
      title: "Portfolio Development",
      description:
        "Guided project work that produces real, presentable portfolio pieces\u2014not toy projects. Everything goes on GitHub.",
    },
    {
      icon: "career",
      title: "Career Support",
      description:
        "CV review, LinkedIn optimization, interview prep, and introductions where possible. The end goal is a job, not a certificate.",
    },
  ],

  // Eligibility Criteria
  criteria: {
    title: "Who We\u2019re Looking For",
    subtitle:
      "You don\u2019t need to be exceptional. You need to be serious.",
    items: [
      {
        label: "STEM Background",
        description:
          "Non-CS STEM degree: physics, chemistry, biology, materials engineering, mathematics, or equivalent. Recent graduates preferred (0\u20133 years post-graduation).",
      },
      {
        label: "Mathematical Comfort",
        description:
          "Comfortable with linear algebra, calculus, and statistics at the undergraduate level. Doesn\u2019t need to be exceptional\u2014needs to not be afraid of it.",
      },
      {
        label: "Genuine Motivation",
        description:
          "Able to articulate why you want to transition into AI/ML, even informally. We\u2019re looking for signal, not polish.",
      },
      {
        label: "Full-Time Commitment",
        description:
          "Able to commit 50 hours per week. This is a full-time undertaking, equivalent to a university course load. Not compatible with a full-time job.",
      },
    ],
  },

  // Application Process
  applicationProcess: {
    title: "How to Apply",
    subtitle:
      "Lightweight but intentional. We filter for signal\u2014curiosity, commitment, thinking ability\u2014not credentials.",
    steps: [
      {
        number: "01",
        title: "Written Application",
        description:
          "Short written application: your background, why AI/ML, and what you\u2019d build if you could build anything. No CV required\u2014just honest answers.",
      },
      {
        number: "02",
        title: "Conversation",
        description:
          "30-minute informal call. Not an interview\u2014a conversation. We\u2019re assessing curiosity, commitment, and programme fit.",
      },
      {
        number: "03",
        title: "Diagnostic",
        description:
          "A short, low-pressure math and logic exercise (take-home, ~2 hours). Not testing knowledge\u2014testing how you think and learn.",
      },
      {
        number: "04",
        title: "Offer",
        description:
          "Accepted fellows receive a written offer outlining the tier, stipend, expectations, and start date.",
      },
    ],
  },

  // FAQ
  faq: [
    {
      question: "Do I need a computer science degree?",
      answer:
        "No. In fact, this programme is specifically designed for people who don\u2019t have one. We\u2019re looking for physicists, chemists, biologists, engineers, and mathematicians.",
    },
    {
      question: "Is this free? What\u2019s the catch?",
      answer:
        "We pay you $200/month. There is no tuition, no income share agreement, no catch. We invest in you because we believe the AI industry needs more domain experts. Your success is our return.",
    },
    {
      question: "Can I do this alongside a full-time job?",
      answer:
        "The programme requires a 50-hour weekly commitment. It\u2019s not compatible with full-time employment. Part-time work is possible, but this should be your primary focus.",
    },
    {
      question: "What happens if I can\u2019t keep up?",
      answer:
        "If life gets in the way, say so. Honesty is valued above all. Stipends can be deferred (not forfeited) while you catch up. If the programme isn\u2019t working, we part ways gracefully\u2014no stigma.",
    },
    {
      question: "Where is this programme based?",
      answer:
        "Everywhere. The programme is fully remote and global from day one. A fellow in Bogot\u00e1 and a fellow in Dhaka get the same experience.",
    },
    {
      question: "What\u2019s the difference between this and a bootcamp?",
      answer:
        "Bootcamps charge you $8\u201316k, have low selectivity, and offer generic curricula. We pay you, select carefully, and build a customized path. We\u2019re closer to a venture-backed fellowship than a school.",
    },
    {
      question: "How is progression decided?",
      answer:
        "At the end of each tier, we make one of four decisions: advance, hold (extend current tier), graduate early, or part ways. Every decision is based on demonstrated traction, not attendance.",
    },
    {
      question: "Who owns the work I produce?",
      answer:
        "You do. 100%. Code, projects, blog posts, portfolio pieces\u2014all yours. This is not a work-for-hire arrangement.",
    },
  ],

  // Testimonials (placeholders)
  testimonials: [
    {
      name: "First Fellow",
      role: "Materials Science \u2192 ML Engineer",
      quote:
        "This space is reserved for our first cohort of fellows. Their stories will go here.",
      avatar: "",
    },
  ],

  // Programme Statistics (placeholders)
  stats: {
    fellowsSupported: "Coming Soon",
    countriesReached: "Global",
    investmentPerFellow: "$2,400",
    completionTarget: "85%",
  },

  // Navigation
  navigation: [
    { label: "About", href: "/about" },
    { label: "Apply", href: "/apply" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
  ],

  // Footer
  footer: {
    title: "Ready to Make the Leap?",
    cta: {
      text: "Apply Now",
      link: "/apply",
    },
  },

  // Backgrounds
  backgrounds: {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
    neutral: "#F0F4F8",
  },

  // Company Information
  company: {
    foundedYear: 2026,
    legalName: "[Programme Name]",
  },

  // Social Links
  social: {
    twitter: "",
    linkedin: "",
    github: "",
  },

  // Contact Info
  contact: {
    email: "hello@programmename.com",
  },
};

// Type definitions
export type SiteConfig = typeof siteConfig;
export type Tier = (typeof siteConfig.tiers)[number];
export type Benefit = (typeof siteConfig.benefits)[number];
export type CriterionItem = (typeof siteConfig.criteria.items)[number];
export type ApplicationStep =
  (typeof siteConfig.applicationProcess.steps)[number];
export type FAQItem = (typeof siteConfig.faq)[number];
export type NavigationItem = (typeof siteConfig.navigation)[number];
