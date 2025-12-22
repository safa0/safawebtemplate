/**
 * Benefits Data
 * Centralized data for automation benefits and value propositions.
 * This data is used by BenefitsSection and related components.
 */

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export const benefits: Benefit[] = [
  {
    icon: "💰",
    title: "On-Device Detection",
    description: "Catch anomalous behavior directly on the microcontroller—no cloud round-trips or added gateways.",
    details: [
      "Real-time detection with sub-10 ms inference",
      "Local analysis protects uptime when links drop",
      "No dependency on cloud connectivity",
      "Edge alerts align with operational safety constraints",
    ],
  },
  {
    icon: "✓",
    title: "Tiny Footprint",
    description: "Purpose-built for MCU-class hardware with tight RAM, flash, and power budgets.",
    details: [
      "<256 KB model footprint targets",
      "Quantization and pruning baked in",
      "Deterministic latency for control loops",
      "Optimized for battery and energy-sensitive deployments",
    ],
  },
  {
    icon: "😊",
    title: "Privacy & Data Locality",
    description: "Analyze telemetry locally to minimize data exposure and reduce attack surface.",
    details: [
      "Sensitive data stays on-device",
      "Less outbound traffic to intercept",
      "Supports privacy-by-design policies",
      "Reduces compliance review cycles",
    ],
  },
  {
    icon: "📈",
    title: "Regulatory Readiness",
    description: "Designed with CRA/NIS2 expectations in mind for embedded devices.",
    details: [
      "Evidence packages for security claims",
      "Freedom-to-operate and novelty search underway",
      "Attack simulation results for auditors",
      "Configurable logging for traceability",
    ],
  },
  {
    icon: "⚡",
    title: "Resilience & Uptime",
    description: "Defense that matches industrial reliability requirements.",
    details: [
      "Local response even when network links fail",
      "Fail-safe behavior tuned for controllers",
      "Continuous monitoring with low overhead",
      "Supports harsh environments and long duty cycles",
    ],
  },
  {
    icon: "🎯",
    title: "Faster Validation to Field",
    description: "Compress the path from research to board-level prototypes.",
    details: [
      "Hardware-in-the-loop testing workflow",
      "Attack scenario playbooks",
      "Rapid turn from feature selection to firmware build",
      "Early proof for partners and early adopters",
    ],
  },
];
