/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      // Example content paths...
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
