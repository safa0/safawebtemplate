/**
 * Site Configuration
 * =================
 * Central configuration file for the entire website.
 * Change values here to customize the site without touching individual components.
 */

export const siteConfig = {
  // Brand Identity
  name: "TinySentinel™",
  tagline: "Lightweight AI Security for Industrial IoT",
  description: "On-device intrusion detection that runs on microcontroller-class hardware, delivering real-time anomaly detection without cloud dependence.",

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
    alt: "TinySentinel Logo",
  },

  // SEO & Metadata
  seo: {
    title: "TinySentinel™ - On-Device Intrusion Detection for Industrial IoT",
    description: "TinySentinel brings machine-learning intrusion detection to resource-constrained IIoT devices. Real-time, on-device anomaly detection with minimal compute and zero cloud dependency.",
    keywords: ["tinyml", "intrusion detection", "iot security", "iiot", "lightweight ai", "on-device security", "cybersecurity"],
  },

  // Hero Section
  hero: {
    headline: ["Intrusion Detection on Microcontrollers"],
    description: "Detect anomalies directly on IIoT nodes with TinySentinel’s ultra-efficient ML models—built for devices measured in kilobytes, not gigabytes.",
    cta: "Book a Demo",
    layout: "side-by-side", // New property: arrange description next to the image
  },

  // Mission
  mission: {
    title: "Our Mission",
    statement: "Protect connected industries by embedding trustworthy, low-footprint AI security where it matters most—the device itself.",
  },

  // Services
  services: [
    {
      number: "1",
      title: "Threat & Requirements Lab",
      description: "Map IIoT attack surfaces, device constraints, and regulatory expectations (CRA, NIS2) to define an on-device detection blueprint.",
      background: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/1",
      detailedContent: [
        "Situation: IIoT fleets are exposed to evolving threats while operating on hardware measured in kilobytes. Vendors must secure devices without sacrificing uptime, latency, or certification pathways.",
        "Task: We profile hardware limits, network behaviors, and compliance requirements (e.g., CRA/NIS2) to scope feasible on-device intrusion detection. We prioritize signals that can be monitored locally without impacting real-time control loops.",
        "Action & Result: You get a requirements dossier covering target behaviors, telemetry budget, regulatory considerations, and an implementation plan tuned to your boards and deployment constraints.",
      ],
    },
    {
      number: "2",
      title: "Model & Feature Adaptation",
      description: "Tailor lightweight ML architectures and feature engineering to your protocols and sensor telemetry while keeping memory and power budgets intact.",
      background: "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/2",
      detailedContent: [
        "Situation: Existing IDS models are too heavy for microcontrollers, and generic features miss industrial behaviors.",
        "Task: We adapt TinySentinel’s feature set and model topology to your traffic patterns and device constraints, selecting embeddings and quantization strategies that survive aggressive memory limits.",
        "Action & Result: You receive tuned models with accompanying feature pipelines that fit your MCU footprint, preserving detection accuracy while honoring latency, RAM, and flash budgets.",
      ],
    },
    {
      number: "3",
      title: "Firmware & Runtime Optimization",
      description: "Integrate the IDS SDK into firmware, compress models, and optimize for deterministic performance on target boards.",
      background: "url('https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/3",
      detailedContent: [
        "Situation: Even efficient models can underperform without tight firmware integration and deterministic scheduling.",
        "Task: We integrate the IDS runtime into your firmware build, apply quantization/pruning, and profile latency, energy, and memory. We harden logging, alerting, and fail-safe behaviors for industrial environments.",
        "Action & Result: You get production-ready firmware modules with verified timing, memory usage, and telemetry hooks, plus developer documentation for ongoing maintenance.",
      ],
    },
    {
      number: "4",
      title: "Field Validation & Monitoring",
      description: "Validate on real hardware, simulate attacks, and operationalize dashboards for operators and compliance teams.",
      background: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/4",
      detailedContent: [
        "Situation: Security claims must be proven on actual boards and reflected in operator workflows.",
        "Task: We run red-team style scenarios, device-in-the-loop tests, and long-horizon monitoring to refine thresholds and response plans. We prepare compliance-ready evidence and operational runbooks.",
        "Action & Result: You receive validated prototypes, dashboards for alerts and performance, and a deployment playbook aligned with your manufacturing, energy, or critical infrastructure requirements.",
      ],
    },
  ],

  // Footer
  footer: {
    title: "Ready to Secure Your IIoT Fleet?",
    cta: {
      text: "Schedule a TinySentinel Demo",
      link: "/contact",
    },
  },

  // Navigation
  navigation: [
    { label: "Technology", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Validation Roadmap", href: "/solutions2" },
    { label: "Why On-Device IDS", href: "/why-automate" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  // Background Images
  backgrounds: {
    hero: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    floral: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
    concrete: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
    neutral: "#E8DCC4",
  },

  // Floating Cards (Hero Section)
  floatingCards: [
    {
      number: 1,
      imageUrl: "https://images.unsplash.com/photo-1582719478248-44e6c3b9ef71?w=400&q=80",
      position: "top-[20%] right-[15%]",
      zIndex: "z-30",
    },
    {
      number: 2,
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&q=80",
      fullScreen: true,
      zIndex: "z-20",
    },
    {
      number: 3,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
      position: "top-[60%] right-[20%]",
      zIndex: "z-10",
    },
  ],

  // Company Information
  company: {
    foundedYear: 2025,
    legalName: "TinySentinel AB",
    location: {
      city: "Skövde",
      state: "Västra Götaland",
      country: "Sweden",
    },
  },

  // Company Statistics
  stats: {
    processesAutomated: "12+",
    hoursSaved: "98.7%",
    averageROI: "<256KB",
    enterpriseClients: "7",
  },

  // Impact Metrics
  metrics: {
    quickMetrics: [
      { id: "detection", value: "98.7%", label: "Detection Accuracy (bench)" },
      { id: "latency", value: "<10ms", label: "Inference Latency" },
      { id: "footprint", value: "<256KB", label: "Model Footprint" },
      { id: "energy", value: "-35%", label: "Energy vs. cloud offload" },
    ],
    detailedMetrics: [
      {
        id: "efficiency-detailed",
        value: "92%",
        label: "Attack Coverage",
        description: "Anomaly classes detected in hardware-in-loop testing",
      },
      {
        id: "roi-detailed",
        value: "30%",
        label: "Telemetry Reduction",
        description: "Less data leaving devices while improving detection fidelity",
      },
      {
        id: "cost-reduction",
        value: "48h",
        label: "Deployment Window",
        description: "From tuned model to firmware-integrated prototype",
      },
      {
        id: "accuracy-detailed",
        value: "12",
        label: "Boards Targeted",
        description: "Microcontroller-class targets in current validation pipeline",
      },
    ],
  },

  // Social Links (if needed)
  social: {
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "",
    facebook: "",
  },

  // Contact Info
  contact: {
    email: "contact@tinysentinel.ai",
    phone: "+46 (0)70 000 0000",
    phoneHref: "tel:+46700000000",
    address: "Skövde & Västerås, Sweden",
  },
};

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
export type Service = typeof siteConfig.services[0];
export type FloatingCard = typeof siteConfig.floatingCards[0];
export type NavigationItem = typeof siteConfig.navigation[0];
