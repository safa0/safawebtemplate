/**
 * Site Configuration
 * =================
 * Central configuration file for the entire website.
 * Change values here to customize the site without touching individual components.
 */

export const siteConfig = {
  // Brand Identity
  name: "LambdaFlow™",
  tagline: "Transform Your Operations with Intelligent Automation",
  description: "Enterprise-grade RPA and AI automation solutions that deliver measurable ROI, boost efficiency, and drive operational excellence through intelligent process automation",

  // Typography
  fonts: {
    // Primary font for body text and UI elements
    // Options: "Inter", "Work_Sans", "DM_Sans", "Plus_Jakarta_Sans", "Outfit"
    sans: "Inter",
    // Serif font for headings and accent text
    // Options: "Lora", "Merriweather", "Playfair_Display", "Cormorant_Garamond"
    serif: "Lora",
  },

  // Logo & Assets
  logo: {
    path: "/logo.png",
    alt: "LambdaFlow Logo",
  },

  // SEO & Metadata
  seo: {
    title: "LambdaFlow™ - Enterprise Automation Implementation Agency",
    description: "Enterprise-grade RPA and AI automation solutions that deliver measurable ROI, boost efficiency, and drive operational excellence through intelligent process automation",
    keywords: ["RPA", "robotic process automation", "AI agents", "process automation", "enterprise automation", "AI integration", "automation agency"],
  },

  // Hero Section
  hero: {
    headline: ["Transform Your", "Operations with", "Intelligent Automation"],
    description: "We orchestrate people and AI agents to deliver measurable ROI through enterprise-grade automation solutions. 500+ Processes Automated | 2M+ Hours Saved | 300% Average ROI",
    cta: "Start Your Automation Journey",
  },

  // Mission
  mission: {
    title: "Our Mission",
    statement: "Empowering enterprises to achieve operational excellence through intelligent automation that seamlessly integrates human expertise with AI capabilities.",
  },

  // Services
  services: [
    {
      number: "1",
      title: "Process Mining & Opportunity Assessment",
      description: "Deep-dive analysis to identify automation opportunities, quantify potential ROI, and build a compelling business case for transformation",
      background: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')",
      textColor: "text-white",
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      number: "2",
      title: "Automation Blueprint & Architecture",
      description: "Strategic design of scalable automation solutions tailored to your enterprise needs, integrating RPA and AI agents for maximum impact",
      background: "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
      textColor: "text-white",
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      number: "3",
      title: "RPA Development & AI Integration",
      description: "End-to-end development of intelligent automation solutions powered by RPA and AI agents, with rigorous testing and optimization",
      background: "#E8DCC4",
      textColor: "text-gray-800",
      hasImage: false,
    },
    {
      number: "4",
      title: "Deployment & Change Management",
      description: "Seamless implementation with minimal disruption, comprehensive training, and ongoing optimization to ensure long-term success",
      background: "#D4C4A8",
      textColor: "text-gray-800",
      hasImage: false,
    },
  ],

  // Footer
  footer: {
    title: "Ready to Unlock Your Automation Potential?",
    cta: {
      text: "Schedule Your Free Consultation",
      link: "#contact",
    },
  },

  // Navigation
  navigation: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Why Automate", href: "/why-automate" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
  ],

  // Background Images
  backgrounds: {
    hero: "https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80",
    floral: "https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80",
    concrete: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80",
    neutral: "#E8DCC4",
  },

  // Floating Cards (Hero Section)
  floatingCards: [
    {
      number: 1,
      imageUrl: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400&q=80",
      position: "top-[20%] right-[15%]",
      zIndex: "z-30",
    },
    {
      number: 2,
      imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80",
      fullScreen: true,
      zIndex: "z-20",
    },
    {
      number: 3,
      imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80",
      position: "top-[60%] right-[20%]",
      zIndex: "z-10",
    },
  ],

  // Social Links (if needed)
  social: {
    twitter: "",
    linkedin: "",
    github: "",
  },

  // Contact Info
  contact: {
    email: "hello@flowforce.com",
    phone: "",
  },
};

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
export type Service = typeof siteConfig.services[0];
export type FloatingCard = typeof siteConfig.floatingCards[0];
export type NavigationItem = typeof siteConfig.navigation[0];
