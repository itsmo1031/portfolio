import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      screens: {
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      }
    },
    extend: {
      keyframes: {
        'wave': {
          'to': { 'background-position': '200% 0%' },
        },
        'launch': {
          '0%': { 'transform': 'rotate(-45deg)' },
          '30%': { 'transform': 'translateY(-0.875rem) rotate(-45deg)' },
          '100%': { 'transform': 'translateY(-0.875rem) rotate(5deg)' },
        }
      },
      animation: {
        'gradient': 'wave 20s linear infinite',
        'launch': 'launch 10s ease-out forwards',
      },
      colors: {
        primary: '#0E5BE7',
        secondary: colors.pink,
      }
    }
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi", "flowbite"])
    })
  ],
};
export default config;
