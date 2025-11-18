/**
 * Animation Constants
 * Centralized configuration for all GSAP animations across the application
 */

/**
 * Animation durations in seconds
 */
export const ANIMATION_DURATIONS = {
  /** Fast animations (0.3s) - for hover effects, quick transitions */
  fast: 0.3,
  /** Normal animations (0.8s) - for standard transitions */
  normal: 0.8,
  /** Slow animations (1.5s) - for hero animations, dramatic reveals */
  slow: 1.5,
  /** Intro animation duration (3s) - for initial page load animations */
  intro: 3,
  /** Extra slow (2.5s) - for complex multi-step animations */
  extraSlow: 2.5,
} as const;

/**
 * Animation delays in seconds
 */
export const ANIMATION_DELAYS = {
  /** No delay */
  none: 0,
  /** Short delay (0.1s) */
  short: 0.1,
  /** Medium delay (0.2s) */
  medium: 0.2,
  /** Long delay (0.3s) */
  long: 0.3,
  /** Extra long delay (0.4s) */
  extraLong: 0.4,
} as const;

/**
 * Stagger values for sequential animations
 */
export const ANIMATION_STAGGERS = {
  /** Fast stagger (0.05s) */
  fast: 0.05,
  /** Normal stagger (0.1s) */
  normal: 0.1,
  /** Slow stagger (0.2s) */
  slow: 0.2,
} as const;

/**
 * Number of slats/rectangles for reveal animations
 */
export const SLAT_COUNTS = {
  /** Few slats (8) - for smaller sections */
  few: 8,
  /** Many slats (20) - for larger, more dramatic reveals */
  many: 20,
} as const;

/**
 * ScrollTrigger start positions
 */
export const SCROLL_TRIGGER_STARTS = {
  /** Top of element at 80% of viewport */
  default: "top 80%",
  /** Top of element at 70% of viewport */
  early: "top 70%",
  /** Top of element at 90% of viewport */
  late: "top 90%",
  /** Top of element at center of viewport */
  center: "top 50%",
  /** Top of element at top of viewport */
  top: "top top",
} as const;

/**
 * ScrollTrigger end positions
 */
export const SCROLL_TRIGGER_ENDS = {
  /** Top of element at 20% of viewport */
  default: "top 20%",
  /** Top of element at 30% of viewport */
  early: "top 30%",
  /** Top of element at 40% of viewport */
  late: "top 40%",
  /** Top of element at center of viewport */
  center: "top 50%",
  /** Bottom of element at bottom of viewport */
  bottom: "bottom bottom",
} as const;

/**
 * Common easing functions
 */
export const ANIMATION_EASINGS = {
  /** Power2 out - smooth deceleration */
  default: "power2.out",
  /** Power3 out - stronger deceleration */
  strong: "power3.out",
  /** Power1 inOut - gentle ease in and out */
  gentle: "power1.inOut",
  /** Elastic out - bouncy effect */
  elastic: "elastic.out(1, 0.3)",
  /** Back out - slight overshoot */
  back: "back.out(1.7)",
} as const;

/**
 * Opacity values for fade animations
 */
export const OPACITY_VALUES = {
  /** Fully transparent */
  hidden: 0,
  /** Partially visible */
  dimmed: 0.5,
  /** Fully visible */
  visible: 1,
} as const;

/**
 * Translation values in pixels for slide animations
 */
export const TRANSLATION_VALUES = {
  /** Small movement (20px) */
  small: 20,
  /** Medium movement (30px) */
  medium: 30,
  /** Large movement (50px) */
  large: 50,
  /** Extra large movement (80px) */
  extraLarge: 80,
  /** Huge movement (100px) */
  huge: 100,
} as const;

/**
 * Common ScrollTrigger configuration presets
 */
export const SCROLL_TRIGGER_PRESETS = {
  /** Default scrub animation */
  scrub: {
    start: SCROLL_TRIGGER_STARTS.default,
    end: SCROLL_TRIGGER_ENDS.default,
    scrub: 1,
  },
  /** Early trigger scrub animation */
  scrubEarly: {
    start: SCROLL_TRIGGER_STARTS.early,
    end: SCROLL_TRIGGER_ENDS.early,
    scrub: 1,
  },
  /** Fade in on scroll */
  fadeIn: {
    start: SCROLL_TRIGGER_STARTS.default,
    end: SCROLL_TRIGGER_ENDS.late,
    scrub: 1,
  },
} as const;
