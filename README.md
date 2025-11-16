# Made In UX Studio - Next.js Clone

A modern, high-performance clone of madeinuxstudio.com built with Next.js, TypeScript, Tailwind CSS, and advanced animation libraries.

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Playfair Display (serif) & Inter (sans-serif)
- **CSS Custom Properties** - Theme variables

### Animation & Interactions
- **Lenis** - Smooth scrolling library (formerly @studio-freight/lenis)
- **GSAP 3.12** - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animations
- **Framer Motion** - React animation library

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles & Tailwind
├── components/
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx  # Lenis integration
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero with floating cards
│   │   ├── MissionSection.tsx        # Mission statement
│   │   ├── ServicesSection.tsx       # Service cards (4 cards)
│   │   ├── FeaturedWorkSection.tsx   # Work showcase
│   │   └── FooterSection.tsx         # Footer CTA
│   └── ui/
│       ├── Header.tsx                # Navigation header
│       ├── PageTransition.tsx        # Page wipe transitions
│       ├── BackgroundManager.tsx     # Dynamic backgrounds
│       ├── ScrollTimer.tsx           # Scroll progress timer
│       ├── FloatingCard.tsx          # 3D floating cards
│       └── CircularScrollIndicator.tsx # Circular progress
├── lib/                              # Utilities (if needed)
└── hooks/                            # Custom React hooks (if needed)
```

## ✨ Features

### Smooth Scrolling
- **Lenis** integration for buttery-smooth scrolling
- Synced with GSAP ScrollTrigger for perfect animation timing
- Customizable easing and duration

### Advanced Animations
- **Hero Section**: 3D floating cards with parallax background
- **Mission Section**: Text reveal with slide-in animation
- **Services Section**: 4 numbered cards with staggered animations
- **Featured Work**: Circular scroll indicator with rotating preview
- **Page Transitions**: Vertical wipe effect with staggered bars

### Dynamic Backgrounds
- Fixed background system that changes based on scroll position
- Smooth opacity transitions between backgrounds
- Three background states: floral, concrete, neutral

### Performance Optimizations
- **GPU-accelerated** animations using transform and opacity
- **will-change** properties for optimized rendering
- **Image optimization** with Next.js Image component
- **Code splitting** with Next.js App Router

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized animations for mobile devices
- Touch-friendly interactions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at **http://localhost:3000**

## 📝 Configuration

### Tailwind Theme
Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens:

```typescript
theme: {
  extend: {
    colors: {
      beige: {
        DEFAULT: '#E8E3D8',
        light: '#F5F3EE',
        dark: '#D4D1C6',
      },
      accent: '#B8B5A8',
    },
  },
}
```

### Lenis Smooth Scroll
Customize scroll behavior in `src/components/providers/SmoothScrollProvider.tsx`:

```typescript
const lenis = new Lenis({
  duration: 1.2,          // Scroll duration
  easing: (t) => ...,     // Easing function
  smoothWheel: true,      // Enable smooth wheel
  wheelMultiplier: 1,     // Scroll speed multiplier
});
```

### GSAP Animations
All GSAP animations are defined in individual section components using `useEffect` hooks for proper cleanup.

## 🎨 Component Guide

### SmoothScrollProvider
Wraps the app with Lenis smooth scrolling and syncs with GSAP ScrollTrigger.

### BackgroundManager
Manages fixed backgrounds that change based on scroll position using ScrollTrigger.

### HeroSection
- Split-screen layout with grid
- 3D floating cards with perspective transforms
- Scroll-based parallax effects
- Initial load animations

### Services Section
All 4 service cards:
1. UX/UI Design
2. Dashboard Design
3. Web & App Design
4. Branding Identity

Each card has:
- Large number overlay
- Title and description
- Optional mockup image
- Staggered scroll animations

### CircularScrollIndicator
- SVG-based circular progress ring
- Rotating preview image
- "View Project" CTA button
- Scroll percentage counter

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:

```bash
npm run build
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^15.1.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lenis": "^1.3.15",
    "gsap": "^3.12.5",
    "framer-motion": "^11.15.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10.4.16",
    "eslint": "^9",
    "eslint-config-next": "^15.1.5"
  }
}
```

## 🎯 Next Steps

### Enhancements
- [ ] Add project detail pages with routing
- [ ] Implement contact form
- [ ] Add more page transitions
- [ ] Create additional sections
- [ ] Add loading states and Suspense
- [ ] Implement dark mode toggle
- [ ] Add micro-interactions
- [ ] Optimize images (use WebP)

### SEO & Performance
- [ ] Add meta tags and OpenGraph
- [ ] Implement sitemap
- [ ] Add analytics
- [ ] Optimize for Core Web Vitals
- [ ] Add robots.txt

### Accessibility
- [ ] ARIA labels for all interactive elements
- [ ] Keyboard navigation
- [ ] Screen reader optimization
- [ ] Focus states
- [ ] Reduced motion support

## 📄 License

This is a demonstration project. Feel free to use and modify.

## 🙏 Credits

- **Original Design**: madeinuxstudio.com
- **GSAP**: GreenSock Animation Platform
- **Lenis**: Studio Freight (now community-maintained)
- **Next.js**: Vercel
- **Images**: Unsplash (replace with real images for production)

## 🐛 Known Issues

- Circular scroll indicator is hidden on mobile for performance
- Page transitions are structural only (trigger functionality to be added)

## 📞 Support

For Next.js issues: [Next.js Documentation](https://nextjs.org/docs)
For GSAP issues: [GSAP Documentation](https://greensock.com/docs/)
For Lenis issues: [Lenis GitHub](https://github.com/darkroomengineering/lenis)

---

**Built with ❤️ using Next.js and modern web technologies**
