/**
 * Responsive Animation Configuration Utility
 *
 * Provides consistent responsive animation settings across the application.
 * Follows the principle: simpler, faster animations on mobile for better performance.
 */

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveAnimationConfig {
  duration: number;
  ease: string;
  staggerAmount: number;
  slatCount: number;
  parallaxIntensity: number;
  useSimpleAnimations: boolean;
  reducedMotion: boolean;
}

/**
 * Detects the current device type based on window width
 */
export const getDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;

  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Gets responsive animation configuration based on device type
 */
export const getResponsiveAnimationConfig = (): ResponsiveAnimationConfig => {
  const deviceType = getDeviceType();
  const reducedMotion = prefersReducedMotion();

  // If user prefers reduced motion, return minimal animation config
  if (reducedMotion) {
    return {
      duration: 0.3,
      ease: 'power1.out',
      staggerAmount: 0.1,
      slatCount: 0, // No slat animations
      parallaxIntensity: 0,
      useSimpleAnimations: true,
      reducedMotion: true,
    };
  }

  // Mobile configuration - fast, simple, performant
  if (deviceType === 'mobile') {
    return {
      duration: 0.6,
      ease: 'power2.out',
      staggerAmount: 0.4,
      slatCount: 6,
      parallaxIntensity: 0, // No parallax on mobile
      useSimpleAnimations: true,
      reducedMotion: false,
    };
  }

  // Tablet configuration - moderate animations
  if (deviceType === 'tablet') {
    return {
      duration: 0.9,
      ease: 'power2.out',
      staggerAmount: 0.6,
      slatCount: 12,
      parallaxIntensity: 0.5, // Reduced parallax
      useSimpleAnimations: false,
      reducedMotion: false,
    };
  }

  // Desktop configuration - full animations
  return {
    duration: 1.2,
    ease: 'power3.out',
    staggerAmount: 0.8,
    slatCount: 20,
    parallaxIntensity: 1, // Full parallax
    useSimpleAnimations: false,
    reducedMotion: false,
  };
};

/**
 * Responsive breakpoint helpers
 */
export const breakpoints = {
  mobile: 640,
  tablet: 1024,
} as const;

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.mobile;
};

export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.mobile && window.innerWidth < breakpoints.tablet;
};

export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return true;
  return window.innerWidth >= breakpoints.tablet;
};

/**
 * Gets Y offset for animations based on device
 */
export const getResponsiveYOffset = (desktopValue: number): number => {
  const deviceType = getDeviceType();

  if (deviceType === 'mobile') return desktopValue * 0.4;
  if (deviceType === 'tablet') return desktopValue * 0.7;
  return desktopValue;
};

/**
 * Gets delay for animations based on device
 */
export const getResponsiveDelay = (desktopDelay: number): number => {
  const deviceType = getDeviceType();

  if (deviceType === 'mobile') return desktopDelay * 0.6;
  if (deviceType === 'tablet') return desktopDelay * 0.8;
  return desktopDelay;
};

/**
 * Determines if parallax should be enabled
 */
export const shouldUseParallax = (): boolean => {
  return isDesktop() && !prefersReducedMotion();
};

/**
 * Determines if complex scroll-triggered animations should be used
 */
export const shouldUseScrubAnimations = (): boolean => {
  return !isMobile() && !prefersReducedMotion();
};

/**
 * Debounced resize handler helper
 */
export const createResizeHandler = (callback: () => void, delay: number = 250) => {
  let timeoutId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};
