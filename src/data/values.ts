/**
 * Company Values Data
 * Centralized data for core company values and principles.
 * This data is used by ValuesSection and related components.
 */

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in automation, leveraging the latest AI and RPA technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Excellence",
    description: "Every project receives our unwavering commitment to quality, precision, and delivering results that exceed expectations.",
  },
  {
    title: "Partnership",
    description: "We view our clients as partners. Your success is our success, and we're committed to your long-term transformation journey.",
  },
  {
    title: "Results",
    description: "We measure ourselves by the tangible impact we deliver. ROI, efficiency gains, and operational excellence are at the heart of everything we do.",
  },
];
