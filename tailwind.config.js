/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: '#5B21B6',
          dark: '#4C1D95',
        },
        secondary: {
          light: '#D97706',
          DEFAULT: '#C2410C',
          dark: '#9A3412',
        },
        accent: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#D1D5DB',
        },
        danger: {
          light: '#EF4444',
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
        },
        warning: {
          light: '#FBBF24',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        info: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        success: {
          light: '#34D399',
          DEFAULT: '#10B981',
          dark: '#059669',
        },

        coloring: {
          light: "#f89b29",
          DEFAULT: '#10B981',
          dark: "#ff1b6b",
        },
      },
    },
  },
  plugins: [],
};
