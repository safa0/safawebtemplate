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
    headline: ["Turn Processes into Smart Flows"],
    description: "We orchestrate people and AI agents to deliver measurable ROI through enterprise-grade automation solutions.",
    cta: "Start Your Automation Journey",
    layout: "side-by-side", // New property: arrange description next to the image
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
      background: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/1",
      detailedContent: [
        "Situation: Most enterprises struggle with hidden inefficiencies buried in complex processes. Teams spend countless hours on repetitive tasks while leadership lacks visibility into where automation could deliver the greatest impact. Without data-driven insights, automation initiatives often target the wrong processes or fail to secure stakeholder buy-in.",
        "Task: We deploy advanced process mining tools to capture real-time data from your systems, creating complete transparency into how work flows through your organization. Through collaborative workshops, we identify automation opportunities and quantify their business value using our proprietary ROI calculator that considers time savings, error reduction, compliance improvements, and scalability.",
        "Action & Result: You receive a prioritized automation roadmap with detailed business cases for each initiative—including process maps, quantified ROI projections, risk assessments, and implementation timelines. This data-backed roadmap secures stakeholder buy-in and serves as your strategic guide, ensuring automation investments align with business objectives and deliver measurable returns from day one."
      ],
    },
    {
      number: "2",
      title: "Automation Blueprint & Architecture",
      description: "Strategic design of scalable automation solutions tailored to your enterprise needs, integrating RPA and AI agents for maximum impact",
      background: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/2",
      detailedContent: [
        "Situation: Poorly designed automation solutions create technical debt, fail to scale with business growth, and struggle to integrate with existing systems. Many organizations rush into implementation without proper architecture, resulting in fragile bots that break with system updates and security vulnerabilities that put enterprise data at risk.",
        "Task: Our architects design enterprise-grade automation blueprints that serve as the technical foundation for your transformation. We create scalable solutions that seamlessly integrate RPA bots and AI agents with your technology stack, establishing governance frameworks for bot management, security, and compliance while defining the optimal mix of attended and unattended automation.",
        "Action & Result: You receive comprehensive architecture diagrams, technology stack recommendations, infrastructure requirements, and detailed process definition documents (PDDs). These blueprints provide your IT team with clear implementation guidance while establishing quality, security, and performance standards—resulting in a solid technical foundation that de-risks implementation, ensures scalability, and accelerates time-to-value."
      ],
    },
    {
      number: "3",
      title: "Development & AI Integration",
      description: "End-to-end development of intelligent automation solutions powered by RPA and AI agents, with rigorous testing and optimization",
      background: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/3",
      detailedContent: [
        "Situation: Automation implementations often fail due to poor code quality, inadequate testing, or bots that can't handle real-world exceptions. Organizations invest heavily in automation only to face production failures, security vulnerabilities, and solutions that require constant maintenance instead of delivering promised efficiencies.",
        "Task: Our certified developers bring your automation blueprint to life using industry-leading platforms like UiPath, Automation Anywhere, or Blue Prism. We build intelligent automation solutions that incorporate document processing, natural language understanding, and machine learning models. Every bot undergoes rigorous testing in environments that mirror production, validating exception handling, logging, monitoring, and performance metrics.",
        "Action & Result: You receive production-ready automation solutions with comprehensive documentation covering bot logic, dependencies, error handling procedures, and maintenance guides—plus training materials for operators and administrators. Our enterprise-grade code ensures security, maintainability, and scalability, delivering long-term value with minimal technical debt and bots that handle exceptions intelligently while learning from experience."
      ],
    },
    {
      number: "4",
      title: "Deployment & Change Management",
      description: "Seamless implementation with minimal disruption, comprehensive training, and ongoing optimization to ensure long-term success",
      background: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')",
      textColor: "text-white",
      hasImage: false,
      link: "/services/4",
      detailedContent: [
        "Situation: Even technically perfect automation fails without proper change management and organizational buy-in. Employees resist new workflows, IT teams struggle with unfamiliar bot infrastructure, and business leaders lack visibility into automation performance. Without structured deployment and ongoing optimization, automation initiatives deliver disappointing results and fail to scale across the enterprise.",
        "Task: We execute phased rollouts that minimize disruption while building confidence through early wins. Our approach includes comprehensive runbooks, rollback procedures, and 24/7 support during critical launches. We conduct tailored training for all stakeholder groups—end users, IT teams, and business leaders—building genuine understanding of how automation transforms workflows and what success looks like.",
        "Action & Result: You gain a sustainable automation program with established monitoring dashboards, performance metrics, and a Center of Excellence (CoE) framework for governance and best practices. We provide ongoing optimization support including performance tuning, exception analysis, and opportunity identification for additional automation. The result is an automation program that grows organically within your organization, driven by automation champions, continuous improvement, and expanding business value."
      ],
    },
  ],

  // Footer
  footer: {
    title: "Ready to Unlock Your Automation Potential?",
    cta: {
      text: "Schedule Your Free Consultation",
      link: "/contact",
    },
  },

  // Navigation
  navigation: [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Solutions2", href: "/solutions2" },
    { label: "Why Automate", href: "/why-automate" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
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

  // Company Information
  company: {
    foundedYear: 2020,
    legalName: "LambdaFlow Inc.",
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },

  // Company Statistics
  stats: {
    processesAutomated: "500+",
    hoursSaved: "2M+",
    averageROI: "300%",
    enterpriseClients: "95+",
  },

  // Impact Metrics
  metrics: {
    quickMetrics: [
      { id: "efficiency", value: "87%", label: "Process Efficiency" },
      { id: "roi", value: "6-12mo", label: "to Full ROI" },
      { id: "cost", value: "40%", label: "Cost Reduction" },
      { id: "accuracy", value: "99.9%", label: "Accuracy Rate" },
    ],
    detailedMetrics: [
      {
        id: "efficiency-detailed",
        value: "87%",
        label: "Average Process Efficiency Gain",
        description: "Across all implementations",
      },
      {
        id: "roi-detailed",
        value: "6-12",
        label: "Months to Full ROI",
        description: "Typical payback period",
      },
      {
        id: "cost-reduction",
        value: "40%",
        label: "Reduction in Operational Costs",
        description: "Within first year",
      },
      {
        id: "accuracy-detailed",
        value: "99.9%",
        label: "Automation Accuracy",
        description: "Error-free execution",
      },
    ],
  },

  // Social Links (if needed)
  social: {
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "https://instagram.com",
    facebook: "",
  },

  // Contact Info
  contact: {
    email: "hello@flowforce.com",
    phone: "+1 (800) AUTO-MATE",
    phoneHref: "tel:+18002886628",
    address: "123 Market St, San Francisco, CA 94103",
  },
};

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
export type Service = typeof siteConfig.services[0];
export type FloatingCard = typeof siteConfig.floatingCards[0];
export type NavigationItem = typeof siteConfig.navigation[0];
