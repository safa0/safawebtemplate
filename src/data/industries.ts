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
    id: "manufacturing",
    name: "Industrial Manufacturing",
    icon: "🏭",
    description: "Protect production lines, PLCs, and robot fleets with on-device anomaly detection that keeps latency predictable.",
    useCases: [
      "Detect abnormal controller instructions",
      "Spot anomalous network chatter on shop-floor devices",
      "Edge privacy for proprietary telemetry",
      "Fail-safe alerts for OT teams",
      "Compliance evidence for CRA/NIS2",
    ],
    metrics: [
      { label: "Latency Overhead", value: "<10 ms" },
      { label: "Memory Target", value: "<256 KB" },
      { label: "Detection Bench", value: "98%+" },
    ],
    bgColor: "bg-amber-50",
    accentColor: "border-amber-400",
  },
  {
    id: "integrators",
    name: "System Integrators & OEMs",
    icon: "🔌",
    description: "Embed IDS into gateways, PLCs, and custom boards to differentiate products with built-in security.",
    useCases: [
      "SDK integration in OEM firmware",
      "Gateway-level anomaly scoring",
      "Per-deployment tuning for customer fleets",
      "Remote configuration with local inference",
      "Audit-ready security documentation",
    ],
    metrics: [
      { label: "Boards Supported", value: "12" },
      { label: "Power Savings", value: "-35%" },
      { label: "Footprint", value: "<256 KB" },
    ],
    bgColor: "bg-blue-50",
    accentColor: "border-blue-400",
  },
  {
    id: "edgeplatforms",
    name: "Industrial Edge Platforms",
    icon: "🛰️",
    description: "Offer embedded anomaly detection as a platform capability for connected factories and smart infrastructure.",
    useCases: [
      "Edge IDS services for partner ecosystems",
      "Telemetry reduction before cloud ingest",
      "Secure multi-tenant device fleets",
      "Device health scoring and alerting",
      "Hardware-in-the-loop validation packs",
    ],
    metrics: [
      { label: "Telemetry Reduction", value: "30%" },
      { label: "Coverage", value: "92% attacks" },
      { label: "Deployment Window", value: "48h" },
    ],
    bgColor: "bg-indigo-50",
    accentColor: "border-indigo-400",
  },
  {
    id: "energy",
    name: "Energy & Critical Infrastructure",
    icon: "⚡",
    description: "Safeguard distributed assets—substations, renewables, utilities—with local detection that survives connectivity gaps.",
    useCases: [
      "Anomaly alerts for remote substations",
      "Bandwidth-aware detection in the field",
      "Local privacy for regulated data",
      "Resilient operation during outages",
      "Compliance-ready logging",
    ],
    metrics: [
      { label: "Offline Operation", value: "100%" },
      { label: "Energy Overhead", value: "-35%" },
      { label: "Alert Latency", value: "<10 ms" },
    ],
    bgColor: "bg-green-50",
    accentColor: "border-green-400",
  },
  {
    id: "security",
    name: "Security Technology Partners",
    icon: "🛡️",
    description: "Extend existing SOC and detection stacks to the device edge with a lightweight, embeddable IDS.",
    useCases: [
      "SDK integration for partner products",
      "License TinySentinel for embedded use",
      "Edge-to-cloud correlation hooks",
      "Attack library sharing and updates",
      "Joint go-to-market for IIoT security",
    ],
    metrics: [
      { label: "Integration Time", value: "Weeks" },
      { label: "Shared Signals", value: "Yes" },
      { label: "SDK Footprint", value: "Tiny" },
    ],
    bgColor: "bg-purple-50",
    accentColor: "border-purple-400",
  },
];
