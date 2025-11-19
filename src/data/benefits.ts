/**
 * Benefits Data
 * Centralized data for automation benefits and value propositions.
 * This data is used by BenefitsSection and related components.
 */

export interface Benefit {
  title: string;
  description: string;
  details: string[];
}

export const benefits: Benefit[] = [
  {
    title: "Cost Reduction",
    description: "Dramatically reduce operational expenses through intelligent automation",
    details: [
      "40-60% reduction in manual labor costs",
      "Elimination of redundant processes",
      "Better resource allocation",
      "Faster invoice processing and approvals",
    ],
  },
  {
    title: "Accuracy & Compliance",
    description: "Achieve 95% error reduction and maintain regulatory compliance",
    details: [
      "95% reduction in human errors",
      "Consistent process execution",
      "Audit trails and documentation",
      "Compliance with regulations (SOX, GDPR, HIPAA)",
    ],
  },
  {
    title: "Employee Satisfaction",
    description: "Free your team from repetitive tasks and boost engagement",
    details: [
      "Elimination of boring, repetitive work",
      "More time for strategic initiatives",
      "Improved job satisfaction and retention",
      "Upskilling opportunities for employees",
    ],
  },
  {
    title: "Scalability",
    description: "Scale operations without proportional cost increases",
    details: [
      "10x processing capacity increase",
      "Handle growth without hiring",
      "Process millions of transactions",
      "Adapt to seasonal demand spikes",
    ],
  },
  {
    title: "Speed to Market",
    description: "Accelerate time-to-value and competitive advantage",
    details: [
      "Faster order processing",
      "Reduced cycle times by 50-70%",
      "Quick deployment and implementation",
      "Rapid ROI realization",
    ],
  },
  {
    title: "Strategic Focus",
    description: "Enable teams to concentrate on high-value work",
    details: [
      "Shift focus from execution to strategy",
      "Increased innovation capacity",
      "Better decision-making with data insights",
      "Competitive differentiation",
    ],
  },
];
