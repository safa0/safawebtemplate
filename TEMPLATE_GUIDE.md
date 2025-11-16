# SigmaFlow Template - Customization Guide

This is a fully customizable horizontal-scrolling website template built with Next.js, TypeScript, and modern animation libraries.

## 🎨 Quick Customization

All branding and content can be changed in **ONE** central location:

### **`src/config/site.ts`**

This file contains ALL customizable content for your website.

## 📝 Customization Steps

### 1. **Brand Identity**

```typescript
// In src/config/site.ts
export const siteConfig = {
  name: "YourCompany",           // Change company name
  tagline: "Your tagline here",  // Change tagline
  description: "Your description", // Change description
}
```

### 2. **Typography (Fonts)**

Choose from professional Google Fonts (no installation needed):

```typescript
fonts: {
  // Primary font for body text and UI elements
  sans: "Inter",  // Options: "Inter", "Work_Sans", "DM_Sans", "Plus_Jakarta_Sans", "Outfit"

  // Serif font for headings and accent text
  serif: "Playfair_Display",  // Options: "Playfair_Display", "Merriweather", "Lora", "Cormorant_Garamond"
},
```

**Current fonts** (similar to madeinuxstudio.com):
- **Sans-serif**: Inter - Modern, clean, professional
- **Serif**: Playfair Display - Elegant headings

**To change fonts**:
1. Update the font names in `src/config/site.ts`
2. Update the imports in `src/app/layout.tsx` to match your chosen Google Fonts

### 3. **Logo**

1. Replace `/public/logo.png` with your logo (PNG with transparent background recommended)
2. Update logo configuration:

```typescript
logo: {
  path: "/logo.png",              // Path to your logo
  alt: "YourCompany Logo",        // Alt text for accessibility
},
```

### 3. **Colors**

Edit `/src/app/globals.css`:

```css
:root {
  --color-khaki: #YourColor;
  --color-khaki-light: #YourLightColor;
  --color-khaki-dark: #YourDarkColor;
  /* ... more colors */
}
```

And `/tailwind.config.ts`:

```typescript
colors: {
  khaki: {
    DEFAULT: '#YourColor',
    light: '#YourLightColor',
    dark: '#YourDarkColor',
  },
}
```

### 4. **Hero Section**

```typescript
hero: {
  headline: ["Your", "custom", "headline"],
  description: "Your hero description",
  cta: "Your CTA text",
},
```

### 5. **Mission Statement**

```typescript
mission: {
  title: "Your Mission Title",
  statement: "Your mission statement here...",
},
```

### 6. **Services**

Add/edit/remove services:

```typescript
services: [
  {
    number: "1",
    title: "Service Name",
    description: "Service description",
    background: "url('image-url')" or "#HexColor",
    textColor: "text-white" or "text-gray-800",
    hasImage: true,  // optional
    imageUrl: "url", // if hasImage is true
  },
  // Add more services...
],
```

### 7. **Images**

Replace background images:

```typescript
backgrounds: {
  hero: "https://your-image-url.com/hero.jpg",
  floral: "https://your-image-url.com/bg1.jpg",
  concrete: "https://your-image-url.com/bg2.jpg",
  neutral: "#HexColor",
},

floatingCards: [
  {
    number: 1,
    imageUrl: "https://your-image-url.com/card1.jpg",
    position: "top-[20%] right-[15%]",
    zIndex: "z-30",
  },
  // ... more cards
],
```

### 8. **Navigation**

```typescript
navigation: [
  { label: "Menu Item 1", href: "#section1" },
  { label: "Menu Item 2", href: "#section2" },
  { label: "Menu Item 3", href: "#section3" },
],
```

### 9. **Footer**

```typescript
footer: {
  title: "Your Footer Title",
  cta: {
    text: "Your CTA Button",
    link: "#contact",
  },
},
```

### 10. **Contact Information**

```typescript
contact: {
  email: "your@email.com",
  phone: "+1234567890",
},

social: {
  twitter: "https://twitter.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourname",
},
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

### Deploy to Other Platforms

The build output is in `.next/` folder. Follow your hosting provider's Next.js deployment guide.

## 🎯 Image Recommendations

### Logo
- **Format**: PNG with transparent background
- **Size**: 512x512px minimum
- **File size**: < 100KB recommended

### Background Images
- **Format**: JPG or WebP
- **Size**: 1920x1080px minimum
- **File size**: Optimized (use tools like TinyPNG)

### Floating Cards
- **Format**: JPG or WebP
- **Size**: 800x600px minimum
- **File size**: < 200KB each

## 🔧 Advanced Customization

### Adding New Sections

1. Create component in `/src/components/sections/`
2. Add to `/src/app/page.tsx` inside horizontal scroll container
3. Update configuration in `/src/config/site.ts` if needed

### Changing Animations

Edit GSAP animations in individual section components:

```typescript
// Example in HeroSection.tsx
const timeline = gsap.timeline({
  scrollTrigger: {
    // Customize scroll trigger settings
  },
});
```

### Changing Fonts

**Easy way** (in `src/config/site.ts`):
```typescript
fonts: {
  sans: "Work_Sans",      // Change to any Google Font
  serif: "Merriweather",  // Change to any Google Font
}
```

**Advanced way** (in `src/app/layout.tsx`):
```typescript
import { Work_Sans, Merriweather } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
  display: "swap",
});
```

**Popular font combinations**:
- **Modern**: Inter + Playfair Display (current)
- **Corporate**: Work Sans + Merriweather
- **Creative**: DM Sans + Lora
- **Tech**: Outfit + Cormorant Garamond

## 📦 Template Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── page.tsx           # Main page (sections layout)
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── config/
│   └── site.ts           # ⭐ MAIN CONFIGURATION FILE
└── lib/                   # Utility functions
```

## 🎨 Color Schemes

### Current: Professional Khaki
- Khaki: `#C3B091`
- Sand: `#D4C4A8`
- Earth: `#9C8B6C`

### Example: Blue Corporate
```css
--color-primary: #2C5F9E;
--color-light: #E8F1F8;
--color-dark: #1A3A5C;
```

### Example: Green Nature
```css
--color-primary: #4A7C59;
--color-light: #E8F4EA;
--color-dark: #2D5A3A;
```

## 📱 Mobile Responsive

The template automatically switches to vertical scrolling on mobile devices (< 768px width).

To customize breakpoints, edit `/src/app/globals.css`:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

## 🌐 SEO Optimization

Update SEO metadata in `/src/config/site.ts`:

```typescript
seo: {
  title: "Your Page Title",
  description: "Your meta description",
  keywords: ["keyword1", "keyword2"],
},
```

## 🔍 Finding Free Stock Photos

Recommended sources:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

## 💡 Tips

1. **Keep it simple**: Don't add too many sections
2. **Optimize images**: Use WebP format and compress images
3. **Test on mobile**: Horizontal scroll works on desktop, vertical on mobile
4. **Brand consistency**: Use the same color palette throughout
5. **Fast loading**: Keep total page size under 3MB

## 🆘 Support

For issues or questions:
1. Check the Next.js documentation
2. Review GSAP documentation
3. Check component files for inline comments

## 📄 License

This template is free to use for both personal and commercial projects.

---

**Built with ❤️ using Next.js, GSAP, and modern web technologies**
