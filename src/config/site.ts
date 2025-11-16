/**
 * Site Configuration
 * =================
 * Central configuration file for the entire website.
 * Change values here to customize the site without touching individual components.
 */

export const siteConfig = {
  // Brand Identity
  name: "FlowForce",
  tagline: "Transforming ideas into seamless digital experiences",
  description: "Professional digital solutions that flow naturally with your business needs, creating powerful experiences that drive results",

  // Logo & Assets
  logo: {
    path: "/logo.svg",
    alt: "FlowForce Logo",
  },

  // SEO & Metadata
  seo: {
    title: "FlowForce - Transforming Ideas into Seamless Digital Experiences",
    description: "Professional digital solutions that flow naturally with your business needs, creating powerful experiences that drive results",
    keywords: ["digital solutions", "web development", "cloud solutions", "automation", "digital strategy"],
  },

  // Hero Section
  hero: {
    headline: ["Professional", "digital solutions", "that flow"],
    description: "We create powerful digital solutions that flow naturally with your business, delivering seamless experiences that drive growth and innovation.",
    cta: "Scroll For More",
  },

  // Mission
  mission: {
    title: "Our Mission",
    statement: "To empower businesses with digital solutions that flow naturally with their goals, creating seamless experiences that drive growth, efficiency, and lasting impact in an ever-evolving digital landscape.",
  },

  // Services
  services: [
    {
      number: "1",
      title: "Digital Strategy",
      description: "Strategic planning that flows with your business vision, creating roadmaps for sustainable digital growth and transformation",
      background: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80')",
      textColor: "text-white",
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      number: "2",
      title: "Web Development",
      description: "Building responsive, scalable web solutions that adapt and flow with your users' needs across all devices",
      background: "url('https://images.unsplash.com/photo-1695990200724-8bb04efe2eab?w=1920&q=80')",
      textColor: "text-white",
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      number: "3",
      title: "Cloud Solutions",
      description: "Seamless cloud infrastructure that scales naturally with your growth, ensuring reliability and performance",
      background: "#E8DCC4",
      textColor: "text-gray-800",
      hasImage: false,
    },
    {
      number: "4",
      title: "Process Automation",
      description: "Streamlining workflows and automating processes to create efficient, flowing systems that save time and resources",
      background: "#D4C4A8",
      textColor: "text-gray-800",
      hasImage: false,
    },
  ],

  // Footer
  footer: {
    title: "Let's Build Something That Flows",
    cta: {
      text: "Start Your Journey",
      link: "#contact",
    },
  },

  // Navigation
  navigation: [
    { label: "Projects (08)", href: "#work" },
    { label: "Who we are", href: "#about" },
    { label: "Get in touch", href: "#contact" },
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
