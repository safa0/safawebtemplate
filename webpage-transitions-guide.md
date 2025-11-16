# Made In UX Studio - Webpage Scroll Transitions Guide

## Overview
This document provides a detailed breakdown of the scroll-based transitions and animations used on the Made In UX Studio website (madeinuxstudio.com), enabling web developers to replicate these effects.

---

## 1. Hero Section (Initial View)

### Layout
- **Split screen design**: Left side contains text content, right side features a full-height background image (floral/garden scene)
- **Left panel**: Beige/cream background (#E8E3D8 or similar)
- **Right panel**: Full-height image with overlaid UI elements

### Elements

**Logo & Tagline (Top Left)**
- Logo: "M" in cursive script
- Tagline: "A studio crafting captivating digital experiences"
- Fixed position or minimal scroll behavior

**Main Headline**
```
Award-winning
design boutique
agency
```
- Large serif typography
- Left-aligned
- Positioned in upper-left quadrant

**Floating Cards/Elements on Right Side**
- Mockup cards with 3D perspective
- Positioned at different z-indices
- Cards show numbered items (1, 2, 3) with design previews
- Subtle shadow effects for depth

**Bottom Left Content**
- Image placeholder (appears to be a wall-mounted sign)
- Description text about UX/UI design and branding
- "Scroll For More" indicator

### Key CSS Properties
```css
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;
}

.hero-left {
  background: #E8E3D8;
  padding: 5rem;
  position: relative;
}

.hero-right {
  background-image: url('floral-background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.floating-card {
  position: absolute;
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);
  transition: transform 0.6s ease-out;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
```

---

## 2. First Scroll Transition: Hero to Mission Statement

### Behavior
As the user begins scrolling:

1. **Background Image Parallax**
   - Right-side floral background scrolls slower than content (parallax effect)
   - Scroll rate: ~0.5x of normal scroll speed

2. **Floating Cards Animation**
   - Cards fade out with opacity transition
   - Slight upward movement (transform: translateY(-50px))
   - Stagger delay between cards (card 1 → card 2 → card 3)

3. **Mission Text Reveal**
   - Text slides in from right side
   - Appears on the right panel (previously showing only image)
   - Text: "Redefine the digital landscape by crafting elegant, human-centered experiences..."

### Implementation
```javascript
// Using GSAP ScrollTrigger or similar
gsap.to('.floating-card', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: -50,
  opacity: 0,
  stagger: 0.1
});

gsap.to('.hero-right-image', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: '30%' // Parallax effect
});

gsap.from('.mission-text', {
  scrollTrigger: {
    trigger: '.mission-section',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 1
  },
  x: 100,
  opacity: 0
});
```

---

## 3. Services Section: Numbered Cards with Background Transitions

### Layout
Three equal-width columns showing:
- **Column 1**: "2 - Dashboard Design" with floral background
- **Column 2**: "3 - Web & App Design" with light/neutral background
- **Column 3**: "4 - Branding Identity" with light/neutral background

### Transition Effects

**1. Background Swap**
- Each card has a different background
- Card 2 maintains the floral photo background
- Cards 3 and 4 have solid light backgrounds
- Smooth crossfade between backgrounds as cards scroll into view

**2. Number Typography**
- Extra-large numerals (2, 3, 4)
- High contrast against backgrounds
- Fixed size regardless of scroll position

**3. Card Reveals**
```css
.service-card {
  width: 33.333%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.service-card-background {
  position: absolute;
  inset: 0;
  transition: opacity 0.8s ease;
}

.service-card-content {
  position: relative;
  z-index: 2;
  padding: 4rem;
}

.service-number {
  font-size: 15rem;
  font-weight: 300;
  line-height: 0.8;
  margin-bottom: 2rem;
}
```

**4. Staggered Animation**
```javascript
gsap.from('.service-card', {
  scrollTrigger: {
    trigger: '.services-section',
    start: 'top 60%',
    end: 'top 20%',
    scrub: 1
  },
  y: 100,
  opacity: 0,
  stagger: 0.2
});
```

### Content Details Per Card

**Card 2: Dashboard Design**
- Background: Continuation of floral image
- Overlay with device mockup (tablet/phone showing dashboard)
- Text: "Built to decode complexity, our dashboards transform data into elegant and intuitive interfaces"

**Card 3: Web & App Design**
- Background: Light gray/cream solid color
- Text: "Crafted for clarity and growth, our web and app experiences are designed to engage and scale seamlessly"

**Card 4: Branding Identity**
- Background: Light/white solid color
- Text: "From strategy and messaging to visual identity, each brand is designed to be scalable, sustainable, and impactful across every digital platform"

---

## 4. Featured Work Section: Circular Scroll Indicator

### Layout
- Dark/dramatic background with physical product photography
- Large "The Place" text on left
- Laptop mockup showing website
- Circular scroll indicator overlay

### Circular Scroll Progress Indicator

**Visual Design**
- Large circle (approx 400-600px diameter)
- Thin stroke outline
- Centered circular image preview inside
- Counter display ("/03  /04")
- "Scroll" text at bottom of circle
- "View Project" button with arrow at top

**Animation Behavior**
```javascript
// SVG circle progress
const circle = document.querySelector('.scroll-progress-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

window.addEventListener('scroll', () => {
  const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const offset = circumference - (scrollPercent * circumference);
  circle.style.strokeDashoffset = offset;
});
```

**HTML Structure**
```html
<div class="featured-work-section">
  <div class="work-indicator">
    <svg class="progress-ring" width="500" height="500">
      <circle
        class="progress-ring-circle"
        stroke="white"
        stroke-width="2"
        fill="transparent"
        r="200"
        cx="250"
        cy="250"
      />
    </svg>
    <div class="indicator-content">
      <button class="view-project">View Project →</button>
      <img src="preview.jpg" class="circular-preview" />
      <div class="counter">/03  /04</div>
      <div class="scroll-text">Scroll</div>
    </div>
  </div>
</div>
```

**CSS**
```css
.work-indicator {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.progress-ring-circle {
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 0.3s ease;
}

.circular-preview {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

---

## 5. Background Transitions & Image Changes

### Transition Pattern
The website uses full-screen background transitions between sections:

**Floral Garden → Concrete/Stone → Beige/Neutral**

**Implementation**
```css
.section-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  transition: opacity 1s ease;
}

.section-background.inactive {
  opacity: 0;
  pointer-events: none;
}
```

```javascript
const sections = document.querySelectorAll('.page-section');
const backgrounds = document.querySelectorAll('.section-background');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bgIndex = entry.target.dataset.bgIndex;
      backgrounds.forEach((bg, index) => {
        bg.classList.toggle('inactive', index !== parseInt(bgIndex));
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

---

## 6. Project Detail Pages: Vertical Wipe Transition

### Behavior
When clicking to view a project (around frame 100):
- Screen wipes with vertical bars/columns
- Alternating light and dark bars slide from left to right
- Creates a "venetian blind" or "shutter" effect
- Duration: ~600-800ms

**Implementation**
```html
<div class="page-transition">
  <div class="transition-bar" style="--delay: 0"></div>
  <div class="transition-bar" style="--delay: 1"></div>
  <div class="transition-bar" style="--delay: 2"></div>
  <div class="transition-bar" style="--delay: 3"></div>
  <div class="transition-bar" style="--delay: 4"></div>
  <div class="transition-bar" style="--delay: 5"></div>
  <div class="transition-bar" style="--delay: 6"></div>
  <div class="transition-bar" style="--delay: 7"></div>
</div>
```

```css
.page-transition {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  pointer-events: none;
}

.transition-bar {
  flex: 1;
  background: #B8B5A8;
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: calc(var(--delay) * 0.05s);
}

.transition-bar:nth-child(even) {
  background: #D4D1C6;
}

.page-transition.active .transition-bar {
  transform: translateX(0);
}

.page-transition.exiting .transition-bar {
  transform: translateX(100%);
}
```

```javascript
function navigateWithTransition(url) {
  const transition = document.querySelector('.page-transition');
  transition.classList.add('active');
  
  setTimeout(() => {
    window.location.href = url;
  }, 800);
}
```

---

## 7. Navigation Header

### Behavior
- Fixed position header
- Becomes visible/opaque as user scrolls past hero
- Minimal design with links and arrows

**Structure**
```html
<header class="main-header">
  <nav>
    <a href="#work">Projects (08) →</a>
    <a href="#about">Who we are →</a>
    <a href="#contact">Get in touch →</a>
  </nav>
</header>
```

```css
.main-header {
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem 3rem;
  z-index: 1000;
  background: rgba(255, 255, 255, 0);
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.main-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.main-header nav {
  display: flex;
  gap: 2rem;
}

.main-header a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
}

.main-header a:hover {
  opacity: 0.6;
}
```

---

## 8. Technical Stack Recommendations

### JavaScript Libraries
1. **GSAP (GreenSock)** with ScrollTrigger plugin
   - Best for scroll-based animations
   - Excellent performance
   - Precise control over timing

2. **Locomotive Scroll** or **Smooth Scrollbar**
   - Smooth scrolling experience
   - Parallax effects
   - Virtual scroll for better control

3. **Intersection Observer API**
   - Native browser API
   - Trigger animations when elements enter viewport
   - No additional library needed

### CSS Approach
- CSS Grid for layout structure
- CSS Custom Properties for theming
- Transform and opacity for animations (GPU-accelerated)
- `will-change` property for optimized animations

### Performance Considerations
```css
/* Optimize animations */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU acceleration */
}

/* Lazy load background images */
.section-background {
  background-image: none;
}

.section-background.loaded {
  background-image: url('image.jpg');
}
```

---

## 9. Complete Example: Hero to Services Transition

```javascript
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: false
  }
});

heroTimeline
  .to('.floating-card-1', { y: -100, opacity: 0, duration: 1 }, 0)
  .to('.floating-card-2', { y: -80, opacity: 0, duration: 1 }, 0.1)
  .to('.floating-card-3', { y: -60, opacity: 0, duration: 1 }, 0.2)
  .to('.hero-right-image', { y: '20%', duration: 1 }, 0)
  .to('.hero-headline', { opacity: 0.3, duration: 1 }, 0);

// Mission section reveal
gsap.from('.mission-text', {
  scrollTrigger: {
    trigger: '.mission-section',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 1
  },
  x: 100,
  opacity: 0
});

// Services cards stagger
gsap.from('.service-card', {
  scrollTrigger: {
    trigger: '.services-section',
    start: 'top 70%',
    end: 'top 20%',
    scrub: 1
  },
  y: 100,
  opacity: 0,
  stagger: 0.15
});

// Background changes
const bgSections = [
  { trigger: '.hero-section', bg: 'floral' },
  { trigger: '.services-section', bg: 'concrete' },
  { trigger: '.work-section', bg: 'neutral' }
];

bgSections.forEach(({ trigger, bg }) => {
  ScrollTrigger.create({
    trigger: trigger,
    start: 'top 50%',
    end: 'bottom 50%',
    onEnter: () => setBackground(bg),
    onEnterBack: () => setBackground(bg)
  });
});

function setBackground(bgName) {
  document.querySelectorAll('.section-background').forEach(bg => {
    bg.classList.toggle('active', bg.dataset.bg === bgName);
  });
}
```

---

## 10. Responsive Considerations

### Mobile Adaptations
```css
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  
  .service-card {
    width: 100%;
    height: auto;
    min-height: 100vh;
  }
  
  .work-indicator {
    scale: 0.6;
  }
}
```

### Touch Device Optimizations
- Reduce parallax intensity on mobile (can cause janky scrolling)
- Simplify animations for better performance
- Consider using simpler fade transitions instead of complex scroll-based animations

---

## Summary

The Made In UX Studio website features:
1. **Hero section** with split-screen layout and floating 3D cards
2. **Parallax scrolling** on background images
3. **Staggered fade-out** animations for hero elements
4. **Service cards** with numbered sections and background transitions
5. **Circular scroll indicator** with progress ring animation
6. **Vertical wipe transition** for page navigation
7. **Smooth scroll** implementation throughout
8. **Dynamic background swapping** based on scroll position

The key to replicating this is using a combination of:
- GSAP with ScrollTrigger for scroll-based animations
- CSS Grid for layout
- Transform and opacity for performant animations
- Intersection Observer for triggering effects
- Fixed positioning with z-index layering for overlays

This creates a sophisticated, modern web experience that feels premium and carefully crafted.
