/**
 * Company Values Data
 * Centralized data for core company values and principles.
 * This data is used by ValuesSection and related components.
 */

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export const values: Value[] = [
  {
    title: "Privacy-First Security",
    description: "Data stays on the device whenever possible—reducing exposure and aligning with privacy-by-design principles.",
    icon: "🔒",
  },
  {
    title: "Resilience by Design",
    description: "Industrial environments demand robustness. We engineer for uptime, deterministic performance, and graceful failure modes.",
    icon: "⚙️",
  },
  {
    title: "Low-Footprint Engineering",
    description: "Every byte, millisecond, and milliwatt matters. We obsess over efficiency to make ML viable on MCUs.",
    icon: "📏",
  },
  {
    title: "Research-Led Impact",
    description: "Rooted in academic research and validated with industry partners, we move fast while preserving scientific rigor.",
    icon: "🔬",
  },
];
