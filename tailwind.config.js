/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
