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
  icon: string;
  color: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: 1,
    title: "Assess",
    subtitle: "Threat & Constraint Mapping",
    description: "Profile devices, protocols, and regulatory needs to frame what on-device intrusion detection must deliver without breaking latency or energy budgets.",
    details: [
      "Hardware and RTOS inventory",
      "Attack surface and threat hypothesis",
      "Telemetry budget and privacy constraints",
      "CRA/NIS2 readiness review",
      "Success metrics and acceptance criteria",
    ],
    icon: "🔍",
    color: "from-khaki to-khaki-dark",
  },
  {
    number: 2,
    title: "Design",
    subtitle: "Feature & Model Blueprint",
    description: "Select lightweight features and model topologies that survive tight memory and timing constraints while preserving detection accuracy.",
    details: [
      "Protocol-specific feature extraction",
      "Model selection, pruning, quantization",
      "Logging and alert schema",
      "Device integration design",
      "Validation plan and datasets",
    ],
    icon: "🏗️",
    color: "from-earth to-accent",
  },
  {
    number: 3,
    title: "Develop",
    subtitle: "Build & Optimize",
    description: "Implement the TinySentinel SDK in firmware, optimize models for MCU targets, and harden telemetry and fallback behaviors.",
    details: [
      "Firmware SDK integration",
      "Latency and energy profiling",
      "Memory footprint tuning",
      "Alerting and failsafe logic",
      "Secure update hooks",
    ],
    icon: "⚙️",
    color: "from-sand to-khaki-dark",
  },
  {
    number: 4,
    title: "Validate",
    subtitle: "Hardware-in-the-Loop",
    description: "Test on real boards, run attack simulations, and tune thresholds and response plans for production environments.",
    details: [
      "Attack scenario playbooks",
      "Sensor and traffic replay testing",
      "Operator workflows and runbooks",
      "Compliance evidence collection",
      "Performance and drift monitoring",
    ],
    icon: "🚀",
    color: "from-earth to-earth",
  },
  {
    number: 5,
    title: "Deploy",
    subtitle: "Rollout & Monitor",
    description: "Ship field-ready builds with dashboards, alerts, and support for continuous improvement across device fleets.",
    details: [
      "Pilot and phased rollouts",
      "Secure configuration management",
      "Fleet monitoring and tuning",
      "Ongoing model refresh options",
      "Partnership for new boards and use cases",
    ],
    icon: "📊",
    color: "from-khaki to-sand",
  },
];
