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
    name: "Högskolan i Skövde",
    category: "Research Partner",
    description: "Academic research roots in lightweight ML for intrusion detection",
  },
  {
    name: "Mälardalen University",
    category: "Embedded AI & IoT",
    description: "Co-developed optimized models for microcontroller-class devices",
  },
  {
    name: "Industrial Labs",
    category: "Hardware Validation",
    description: "Board-level testing and firmware integration for IIoT targets",
  },
  {
    name: "IEEE Submission",
    category: "Peer Review",
    description: "Conference paper under review covering refined model performance",
  },
  {
    name: "Security Advisors",
    category: "Regulatory & FTO",
    description: "Guiding freedom-to-operate and CRA/NIS2 alignment",
  },
  {
    name: "Industrial Integrators",
    category: "Pilot Partners",
    description: "Early adopters validating TinySentinel in production-like IIoT settings",
  },
];
