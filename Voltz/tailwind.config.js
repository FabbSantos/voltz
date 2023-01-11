/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        "first-bg": "url('./first.webp')",
      },
      colors: {
        "voltz_blue": "#0057E1",
      },
    }, 
  },
  plugins: [],
};
