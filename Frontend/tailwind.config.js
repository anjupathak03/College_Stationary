/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';  // Import daisyUI using ESModules

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,  // Use the imported daisyUI plugin
  ],
};
