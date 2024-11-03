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
        'background': '#011221',
        // Primary colors
        'primary': {
          '1': '#010C15',  // Darkest blue
          '2': '#011627',  // Navy blue
          '3': '#011221',  // Main background
        },
        // Secondary colors
        'secondary': {
          '1': '#607B96',  // Grayish blue
          '2': '#3C9D93',  // Teal
          '3': '#4D5BCE',  // Purple blue
          '4': '#FFFFFF',  // White
        },
        // Accent colors
        'accent': {
          '1': '#FEA55F',  // Orange
          '2': '#43D9AD',  // Mint green
          '3': '#E99287',  // Coral
          '4': '#C98BDF',  // Purple
        },
        // Links
        'link': '#E5E9F0',
        // Gradients
        'gradient': {
          'blue': '#4D5BCE',
          'green': '#43D9AD',
        }
      },
      fontFamily: {
        openSansItalic: ['var(--font-openSans-italic)'],
        openSans: ['var(--font-openSans)'],
        firaCode: ['var(--font-firaCode)'],
      }
    },
  },
  plugins: [],
};
export default config;
