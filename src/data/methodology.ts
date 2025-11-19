/**
 * Methodology Data
 * Centralized data for the 5-step methodology and process workflow.
 * This data is used by MethodologySection and related components.
 */

export interface MethodologyStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  color: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: 1,
    title: "Discover",
    subtitle: "Process Mining & Analysis",
    description: "We conduct a comprehensive analysis of your current processes to identify automation opportunities, map workflows, and quantify potential ROI.",
    details: [
      "Process mapping and analysis",
      "Bottleneck identification",
      "ROI and cost-benefit analysis",
      "Risk assessment and mitigation planning",
      "Business case development",
    ],
    color: "from-khaki to-khaki-dark",
  },
  {
    number: 2,
    title: "Design",
    subtitle: "Blueprint & Architecture",
    description: "Our architects design a tailored automation blueprint that aligns with your enterprise infrastructure, security requirements, and business objectives.",
    details: [
      "Solution architecture design",
      "Technology stack selection",
      "Integration point mapping",
      "Security and compliance planning",
      "Scalability framework",
    ],
    color: "from-earth to-accent",
  },
  {
    number: 3,
    title: "Develop",
    subtitle: "Build & Test",
    description: "Our expert developers build your automation solution using industry best practices, with rigorous testing and quality assurance at every step.",
    details: [
      "RPA bot development",
      "AI agent integration",
      "Unit and integration testing",
      "Performance optimization",
      "Security hardening",
    ],
    color: "from-sand to-khaki-dark",
  },
  {
    number: 4,
    title: "Deploy",
    subtitle: "Implementation & Go-Live",
    description: "We orchestrate a seamless transition to production with minimal business disruption, comprehensive staff training, and change management support.",
    details: [
      "Production environment setup",
      "Data migration and validation",
      "Comprehensive staff training",
      "Change management execution",
      "Go-live support (24/7)",
    ],
    color: "from-earth to-earth",
  },
  {
    number: 5,
    title: "Deliver",
    subtitle: "Optimization & Support",
    description: "We provide ongoing support and optimization to ensure your automation delivers sustained value and continues to evolve with your business needs.",
    details: [
      "Performance monitoring and reporting",
      "Continuous optimization",
      "Proactive issue management",
      "Regular health checks and updates",
      "Long-term strategic partnership",
    ],
    color: "from-khaki to-sand",
  },
];
