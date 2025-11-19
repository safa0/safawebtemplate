/**
 * Technology Partners Data
 * Centralized data for technology partnerships and integrations.
 * This data is used by TechnologyPartnersSection and related components.
 */

export interface Partner {
  name: string;
  category: string;
  description: string;
}

export const partners: Partner[] = [
  {
    name: "UiPath",
    category: "RPA Platform",
    description: "Leading enterprise RPA platform powering our automation solutions",
  },
  {
    name: "OpenAI",
    category: "AI & LLM",
    description: "Advanced AI capabilities for intelligent automation workflows",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Secure and scalable cloud infrastructure for our solutions",
  },
  {
    name: "Microsoft",
    category: "Enterprise Integration",
    description: "Deep integration with Microsoft enterprise ecosystem",
  },
  {
    name: "Salesforce",
    category: "CRM Integration",
    description: "Seamless Salesforce automation and integration capabilities",
  },
  {
    name: "Databricks",
    category: "Data & Analytics",
    description: "Advanced data processing for intelligent automation insights",
  },
];
