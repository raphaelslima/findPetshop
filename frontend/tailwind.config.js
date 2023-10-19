/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'primary-blue': '#31ABB8',
      'dark-blue': '#0051F8',
      'primary-white': '#FFFFFF',
      'primary-red': '#FF0000',
      'primary-black': '#000000'
    },
    extend: {}
  },
  plugins: []
};
