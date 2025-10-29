import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Keep if you might use App Router later, otherwise optional
  ],
  theme: {
    extend: {
      colors: {
        'gold-accent': '#D4AF37', // Your primary accent color
        'dark-text': '#333333',
        'light-bg': '#F8F8F8', // A very light off-white background
        'light-blue-bg': '#E0F2F7', // Subtle light blue from your image hint
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Montserrat', 'Roboto', etc.
        serif: ['serif'], // For potential serif headings
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;