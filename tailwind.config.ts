import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0A1628',
          light: '#1A2A4A',
          lighter: '#2A3A5A',
        },
        navy: '#0F2A4A',
        coral: {
          DEFAULT: '#E94560',
          light: '#FF6B81',
          dark: '#C73550',
        },
        slate: '#94A3B8',
        ice: '#F0F4F8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
