/**
 * Industries Data
 * Centralized data for all supported industries, their use cases, and success metrics.
 * This data is used by IndustryCardsSection and related components.
 */

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  useCases: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  bgColor: string;
  accentColor: string;
}

export const industries: Industry[] = [
  {
    id: "financial",
    name: "Financial Services & Banking",
    icon: "💳",
    description: "Transform banking operations with intelligent automation for faster, compliant processes.",
    useCases: [
      "Invoice Processing & Payment Automation",
      "KYC & Customer Onboarding",
      "Compliance & Regulatory Reporting",
      "Loan Processing Automation",
      "Transaction Reconciliation",
    ],
    metrics: [
      { label: "Processing Time Reduced", value: "75%" },
      { label: "Compliance Accuracy", value: "99.9%" },
      { label: "Cost Savings", value: "60%" },
    ],
    bgColor: "bg-blue-50",
    accentColor: "border-blue-400",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "🏥",
    description: "Streamline healthcare operations while maintaining HIPAA compliance and patient care excellence.",
    useCases: [
      "Patient Records Management",
      "Insurance Claims Processing",
      "Appointment Scheduling Automation",
      "Medical Data Entry & Validation",
      "Prior Authorization Workflow",
    ],
    metrics: [
      { label: "Claims Processing Speed", value: "5x Faster" },
      { label: "Error Rate", value: "-90%" },
      { label: "Patient Wait Time", value: "-40%" },
    ],
    bgColor: "bg-green-50",
    accentColor: "border-green-400",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Supply Chain",
    icon: "🏭",
    description: "Optimize production and logistics with real-time automation and intelligent monitoring.",
    useCases: [
      "Inventory Management & Tracking",
      "Order Processing & Fulfillment",
      "Quality Control & Inspection",
      "Supply Chain Visibility",
      "Demand Forecasting & Planning",
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "98%" },
      { label: "Order Fulfillment Time", value: "-50%" },
      { label: "Supply Chain Visibility", value: "100%" },
    ],
    bgColor: "bg-amber-50",
    accentColor: "border-amber-400",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "🛒",
    description: "Elevate customer experience while automating backend operations for seamless commerce.",
    useCases: [
      "Customer Service & Support Automation",
      "Order Fulfillment & Logistics",
      "Returns & Refunds Processing",
      "Inventory Sync & Updates",
      "Customer Data Management",
    ],
    metrics: [
      { label: "Customer Response Time", value: "-70%" },
      { label: "Return Processing", value: "3x Faster" },
      { label: "Customer Satisfaction", value: "+35%" },
    ],
    bgColor: "bg-pink-50",
    accentColor: "border-pink-400",
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: "📋",
    description: "Accelerate delivery and improve profitability through intelligent automation of service operations.",
    useCases: [
      "Document Processing & Management",
      "Financial Reporting & Analysis",
      "Billing & Time Tracking Automation",
      "Contract Review & Management",
      "Resource Planning & Allocation",
    ],
    metrics: [
      { label: "Document Processing Time", value: "-80%" },
      { label: "Billing Accuracy", value: "99.95%" },
      { label: "Project Margins", value: "+25%" },
    ],
    bgColor: "bg-purple-50",
    accentColor: "border-purple-400",
  },
];
