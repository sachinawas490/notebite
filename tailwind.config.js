/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1e293b',  // dark background
        lightGray: '#6b7280',  // light grey for text
        golden: '#ffd700',  // golden color
      },
      boxShadow: {
        golden: '0 4px 6px -1px rgba(255, 215, 0, 0.5), 0 2px 4px -2px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [ require('daisyui'),],
  daisyui: {
    themes: ["light", ],
  },
}

