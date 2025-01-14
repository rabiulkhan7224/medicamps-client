/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#072110',
        'background': '#effbf4',
        'primarycolor': '#3bd380',
        'secondarycolor': '#8dc7e6',
        'accentcolor': '#6a8bde',
       }
    },
    
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", ],
  },
}

