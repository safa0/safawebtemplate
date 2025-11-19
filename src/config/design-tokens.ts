/**
 * Design Tokens - Responsive Design System Configuration
 *
 * This file centralizes all responsive design values to ensure consistency
 * across the application and avoid hardcoded values in components.
 *
 * Usage: Import these tokens and use them to build responsive className strings
 */

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  section: {
    mobile: 'px-4 py-12 sm:px-6 sm:py-16',
    tablet: 'md:px-8 md:py-20',
    desktop: 'lg:px-12 lg:py-24 xl:px-16 xl:py-28'
  },
  container: {
    mobile: 'px-4 sm:px-6',
    tablet: 'md:px-8',
    desktop: 'lg:px-12 xl:px-16'
  },
  card: {
    mobile: 'p-4 sm:p-6',
    tablet: 'md:p-8',
    desktop: 'lg:p-10 xl:p-12'
  },
  gap: {
    xs: 'gap-2 sm:gap-3',
    sm: 'gap-3 sm:gap-4 md:gap-6',
    md: 'gap-4 sm:gap-6 md:gap-8',
    lg: 'gap-6 sm:gap-8 md:gap-10 lg:gap-12',
    xl: 'gap-8 sm:gap-10 md:gap-12 lg:gap-16'
  }
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  // Display headings (hero sections, landing pages)
  display: {
    xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight',
    md: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight',
    sm: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight'
  },
  // Standard headings (section titles)
  heading: {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug',
    h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug',
    h5: 'text-base sm:text-lg md:text-xl lg:text-2xl leading-normal',
    h6: 'text-sm sm:text-base md:text-lg lg:text-xl leading-normal'
  },
  // Body text
  body: {
    lg: 'text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed',
    md: 'text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed',
    sm: 'text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed',
    xs: 'text-xs sm:text-sm md:text-base leading-normal'
  },
  // Special purpose
  label: 'text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase',
  number: {
    // For large decorative numbers
    hero: 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold',
    large: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold',
    medium: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
    small: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'
  }
} as const;

// ============================================================================
// LAYOUT SYSTEM
// ============================================================================

export const layout = {
  // Container max widths
  maxWidth: {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  },
  // Common grid patterns
  grid: {
    auto: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    twoCol: 'grid grid-cols-1 md:grid-cols-2',
    threeCol: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    fourCol: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    stats: 'grid grid-cols-2 md:grid-cols-4'
  },
  // Heights - using safer alternatives to vh units
  minHeight: {
    screen: 'min-h-screen',
    screenDynamic: 'min-h-[100dvh]', // Dynamic viewport height (safe for mobile)
    section: 'min-h-[400px] sm:min-h-[500px] md:min-h-[600px]',
    hero: 'min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]',
    card: 'min-h-[200px] sm:min-h-[250px] md:min-h-[300px]'
  }
} as const;

// ============================================================================
// INTERACTIVE ELEMENTS
// ============================================================================

export const interactive = {
  // Touch-friendly minimum sizes (44px minimum as per accessibility guidelines)
  touchTarget: 'min-h-[44px] min-w-[44px]',
  // Button variants with responsive sizing
  button: {
    primary: 'px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-medium rounded-lg transition-all duration-200',
    secondary: 'px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-medium rounded-lg transition-all duration-200',
    large: 'px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg md:text-xl font-medium rounded-lg transition-all duration-200',
    icon: 'p-2 sm:p-3 min-h-[44px] min-w-[44px] rounded-lg transition-all duration-200'
  },
  // Form elements
  input: 'px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg min-h-[44px]',
  textarea: 'px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg rounded-lg'
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Combines responsive spacing classes for sections
 * @param variant - The spacing variant (default: 'section')
 */
export function getSectionSpacing(variant: 'section' | 'container' | 'card' = 'section') {
  const s = spacing[variant];
  return `${s.mobile} ${s.tablet} ${s.desktop}`;
}

/**
 * Combines responsive container padding classes
 */
export function getContainerPadding() {
  const c = spacing.container;
  return `${c.mobile} ${c.tablet} ${c.desktop}`;
}

/**
 * Combines responsive card padding classes
 */
export function getCardPadding() {
  const c = spacing.card;
  return `${c.mobile} ${c.tablet} ${c.desktop}`;
}

/**
 * Get responsive typography classes
 * @param type - Typography type (display, heading, body)
 * @param size - Size variant
 */
export function getTypography(
  type: keyof typeof typography,
  size: string
): string {
  const typeObj = typography[type] as Record<string, string>;
  return typeObj[size] || '';
}

/**
 * Get responsive gap classes
 * @param size - Gap size (xs, sm, md, lg, xl)
 */
export function getGap(size: keyof typeof spacing.gap): string {
  return spacing.gap[size];
}

// ============================================================================
// BREAKPOINT HELPERS
// ============================================================================

/**
 * Tailwind breakpoint values (for JavaScript usage)
 * These match Tailwind's default breakpoints
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

/**
 * Media query helper for use in JavaScript/GSAP animations
 */
export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.md - 1}px)`,
  tablet: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  desktop: `(min-width: ${breakpoints.lg}px)`,
  isMobile: () => typeof window !== 'undefined' && window.innerWidth < breakpoints.md,
  isTablet: () => typeof window !== 'undefined' && window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg,
  isDesktop: () => typeof window !== 'undefined' && window.innerWidth >= breakpoints.lg
} as const;

/**
 * Detect if user prefers reduced motion (for GSAP animations)
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  spacing,
  typography,
  layout,
  interactive,
  breakpoints,
  mediaQueries,
  prefersReducedMotion,
  getSectionSpacing,
  getContainerPadding,
  getCardPadding,
  getTypography,
  getGap
};
