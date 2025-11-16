# Made In UX Studio - Webpage Transitions Implementation

A complete implementation of sophisticated scroll-based transitions and animations inspired by modern design studio websites.

## Features

### 🎬 Scroll-Based Animations
- **Hero Section**: Split-screen layout with parallax background and 3D floating cards
- **Mission Section**: Smooth text reveal with horizontal slide-in animation
- **Services Cards**: Numbered cards with staggered animations and background transitions
- **Featured Work**: Circular scroll progress indicator with rotating preview
- **Page Transitions**: Vertical wipe effect with alternating colored bars

### 🎨 Visual Effects
- Parallax scrolling on hero background
- Staggered card animations with 3D perspective
- Dynamic background swapping based on scroll position
- Smooth opacity and transform transitions
- Circular progress ring that fills as you scroll
- Responsive design for mobile and tablet devices

### ⚡ Performance Optimizations
- GPU-accelerated animations using `transform` and `opacity`
- `will-change` property for optimized rendering
- Efficient scroll triggers
- Responsive media queries for mobile performance

## File Structure

```
guidedweb/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # GSAP animations and scroll effects
├── README.md           # This file
└── webpage-transitions-guide.md  # Original reference guide
```

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Grid layout, custom properties, animations
- **JavaScript (ES6+)**: Modern JavaScript features
- **GSAP 3.12.5**: Industry-leading animation library
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Google Fonts**: Playfair Display (serif) & Inter (sans-serif)

## Getting Started

### Option 1: Quick Start (Simple HTTP Server)

1. Open terminal in the project directory
2. Start a local server:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```
3. Open browser to `http://localhost:8000`

### Option 2: Just Open the File

Simply double-click `index.html` to open in your default browser. All dependencies are loaded via CDN.

## Customization Guide

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --color-beige: #E8E3D8;
    --color-light: #F5F3EE;
    --color-dark: #333;
    --color-accent: #B8B5A8;
}
```

### Changing Background Images

Replace the Unsplash URLs in `index.html`:

```html
<!-- Fixed Backgrounds -->
<div class="section-background active" data-bg="floral"
     style="background-image: url('YOUR_IMAGE_URL');"></div>
```

Or in `styles.css` for the hero section:

```css
.hero-right-image {
    background-image: url('YOUR_IMAGE_URL');
}
```

### Adjusting Animation Speed

Modify the GSAP timeline durations in `script.js`:

```javascript
// Slower animations (increase duration)
heroTimeline
    .to('.floating-card-1', { y: -100, opacity: 0, duration: 2 }, 0)

// Faster animations (decrease duration)
heroTimeline
    .to('.floating-card-1', { y: -100, opacity: 0, duration: 0.5 }, 0)
```

### Changing Scroll Trigger Points

Edit the ScrollTrigger configuration:

```javascript
scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',      // When trigger hits viewport top
    end: 'bottom top',     // When trigger bottom hits viewport top
    scrub: 1               // Smooth scrubbing (1 second delay)
}
```

### Adding More Sections

1. Add HTML section in `index.html`:
```html
<section class="my-section page-section" data-bg-index="1">
    <div class="my-content">
        <h2>My New Section</h2>
        <p>Content here...</p>
    </div>
</section>
```

2. Add styles in `styles.css`:
```css
.my-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

3. Add animation in `script.js`:
```javascript
gsap.from('.my-content', {
    scrollTrigger: {
        trigger: '.my-section',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
    },
    y: 100,
    opacity: 0
});
```

## Animation Details

### Hero Section Animations
- **Floating cards**: Fade out and move up with stagger delay
- **Background**: Parallax effect (moves slower than scroll)
- **Headline**: Fades and scales down
- **Bottom content**: Fades out

### Mission Section
- Text slides in from right with fade-in effect
- Activates when section is 80% into viewport

### Services Section
- Cards stagger in from bottom
- Large numbers scale and fade in
- Background images transition smoothly

### Featured Work
- Title slides in from left
- Laptop mockup zooms in from bottom
- Circular indicator rotates and fills with scroll progress

### Page Transitions
- 8 vertical bars slide in with stagger
- Alternating light/dark colors
- Complete wipe effect in ~800ms

## Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Tips

1. **Images**: Use optimized images (WebP format recommended)
2. **Loading**: Images are loaded via CDN - consider hosting locally for production
3. **Mobile**: Parallax effects are reduced on mobile for better performance
4. **Lazy Loading**: Add `loading="lazy"` to images below the fold

## Debugging

Enable ScrollTrigger markers to visualize trigger points:

```javascript
// In script.js, uncomment:
ScrollTrigger.getAll().forEach(trigger => {
    trigger.vars.markers = true;
});
```

Check console for initialization info:
```
🎨 Made In UX Studio - Scroll Animations Initialized
📊 Active ScrollTriggers: [number]
```

## Known Issues & Solutions

**Issue**: Animations feel jerky on scroll
- **Solution**: Increase `scrub` value in ScrollTrigger config (e.g., `scrub: 2`)

**Issue**: Floating cards not visible
- **Solution**: Check browser console for image loading errors

**Issue**: Scroll not smooth
- **Solution**: Ensure you're using a modern browser with smooth scrolling support

## Credits

- **GSAP**: GreenSock Animation Platform
- **Images**: Unsplash (placeholder images - replace for production)
- **Fonts**: Google Fonts
- **Inspiration**: Modern design studio websites

## License

This is a demonstration project. Feel free to use and modify for your own projects.

## Next Steps

1. **Replace Images**: Use your own high-quality images
2. **Add Content**: Replace placeholder text with real content
3. **Customize Colors**: Match your brand identity
4. **Add Pages**: Create additional pages with page transitions
5. **Optimize**: Compress images and minify CSS/JS for production
6. **SEO**: Add meta tags, alt text, and semantic HTML improvements

## Support

For issues or questions about GSAP:
- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Forums](https://greensock.com/forums/)

---

**Built with ❤️ using GSAP and modern web technologies**
