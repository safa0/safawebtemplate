/**
 * Slat Reveal Animation Utility
 * Creates and animates vertical slat reveal effects using SVG clip-paths
 */

import { gsap } from "gsap";
import { SLAT_COUNTS, ANIMATION_DURATIONS, ANIMATION_EASINGS } from "@/constants/animations";

export interface SlatRevealElement {
  /** CSS selector for the element to animate */
  selector: string;
  /** Unique ID for the clip-path */
  clipId: string;
  /** Delay before animation starts (in seconds) */
  delay?: number;
}

export interface SlatRevealOptions {
  /** Number of vertical slats (default: 8) */
  numberOfSlats?: number;
  /** Animation duration in seconds (default: 1.2) */
  duration?: number;
  /** Stagger amount for sequential slat animation (default: 0.8) */
  stagger?: number;
  /** Easing function (default: "power2.out") */
  ease?: string;
  /** SVG element ID (default: "slat-clip-svg") */
  svgId?: string;
}

/**
 * Creates an SVG element for clip-path definitions
 * Reuses existing SVG if it already exists in the DOM
 *
 * @param svgId - Unique ID for the SVG element
 * @returns SVGSVGElement
 */
function getOrCreateSVG(svgId: string): SVGSVGElement {
  let svg = document.querySelector(`#${svgId}`) as SVGSVGElement;

  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as SVGSVGElement;
    svg.setAttribute("id", svgId);
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    document.body.appendChild(svg);
  }

  return svg;
}

/**
 * Creates a clip-path with vertical rectangles (slats)
 *
 * @param clipId - Unique ID for the clip-path
 * @param numberOfSlats - Number of vertical slats
 * @param defs - SVG defs element to append the clip-path to
 * @returns SVGClipPathElement
 */
function createSlatClipPath(
  clipId: string,
  numberOfSlats: number,
  defs: SVGDefsElement
): SVGClipPathElement {
  const clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
  clipPath.setAttribute("id", clipId);
  clipPath.setAttribute("clipPathUnits", "objectBoundingBox");

  const rectWidth = 1 / numberOfSlats;

  // Create vertical rectangles
  for (let i = 0; i < numberOfSlats; i++) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", String(i * rectWidth));
    rect.setAttribute("y", "0");
    rect.setAttribute("width", String(rectWidth));
    rect.setAttribute("height", "1");
    clipPath.appendChild(rect);
  }

  defs.appendChild(clipPath);
  return clipPath;
}

/**
 * Applies slat reveal animation to multiple elements
 *
 * @param elements - Array of elements to animate with their configurations
 * @param options - Animation options
 * @returns Cleanup function to remove SVG elements
 *
 * @example
 * ```tsx
 * const cleanup = applySlatReveal([
 *   { selector: ".hero-title", clipId: "hero-title-clip", delay: 0 },
 *   { selector: ".hero-image", clipId: "hero-image-clip", delay: 0.2 }
 * ], {
 *   numberOfSlats: 8,
 *   duration: 1.2
 * });
 *
 * // Later, in cleanup:
 * return () => cleanup();
 * ```
 */
export function applySlatReveal(
  elements: SlatRevealElement[],
  options: SlatRevealOptions = {}
): () => void {
  const {
    numberOfSlats = SLAT_COUNTS.few,
    duration = 1.2,
    stagger = 0.8,
    ease = ANIMATION_EASINGS.default,
    svgId = "slat-clip-svg",
  } = options;

  // Create or get SVG element
  const svg = getOrCreateSVG(svgId);
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.appendChild(defs);

  // Animate each element
  elements.forEach(({ selector, clipId, delay = 0 }) => {
    const element = document.querySelector(selector);
    if (!element) return;

    // Create clip-path
    const clipPath = createSlatClipPath(clipId, numberOfSlats, defs);

    // Apply clip-path to element
    gsap.set(element, {
      clipPath: `url(#${clipId})`,
    });

    // Animate the rectangles
    const rects = clipPath.querySelectorAll("rect");
    gsap.from(rects, {
      scaleX: 0,
      transformOrigin: "left center",
      duration,
      delay,
      ease,
      stagger: {
        amount: stagger,
        ease: "none",
      },
    });
  });

  // Return cleanup function
  return () => {
    const svgElement = document.querySelector(`#${svgId}`);
    if (svgElement && svgElement.parentNode) {
      svgElement.parentNode.removeChild(svgElement);
    }
  };
}

/**
 * Creates a slat reveal animation with intro animation delay logic
 * Checks sessionStorage for intro animation state and adjusts delays accordingly
 *
 * @param elements - Array of elements to animate
 * @param options - Animation options
 * @param introDelay - Delay to add if intro hasn't played (default: 3 seconds)
 * @returns Cleanup function
 */
export function applySlatRevealWithIntro(
  elements: SlatRevealElement[],
  options: SlatRevealOptions = {},
  introDelay: number = ANIMATION_DURATIONS.intro
): () => void {
  const hasIntroPlayed =
    typeof window !== "undefined" ? sessionStorage.getItem("introAnimationPlayed") : true;

  const baseDelay = hasIntroPlayed ? 0 : introDelay;

  // Add intro delay to all element delays
  const elementsWithDelay = elements.map((el) => ({
    ...el,
    delay: (el.delay || 0) + baseDelay,
  }));

  return applySlatReveal(elementsWithDelay, options);
}
