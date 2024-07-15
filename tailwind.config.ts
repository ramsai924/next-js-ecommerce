import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        Robot: ['Roboto', 'serif']
      },
      colors: {
        'em-light-red': '#c6645b',
        'em-light-yellow': '#ee9b4e',
        'em-light-green': '#53b175',
        'em-light-green-100': '#eef8f2',
        'em-light-red-100': '#fde8e4',
        'em-light-yellow-100': '#fef8e5',
        'em-light-violet-100': '#f4ebf7',
        'em-light-blue-100': '#edf7fc'
      },
      backgroundImage: {
        'custom-em-gradient': 'linear-gradient(55deg, rgba(198,100,91,1) 0%, rgba(238,155,78,1) 50%, rgba(165,214,110,1) 100%)'
      },
      gridTemplateColumns:{
        'products-grid': 'repeat(auto-fit, minmax(0, 240px))',
        'header-grid': 'repeat(3, 1fr)',
      },
      boxShadow: {
        'product-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config