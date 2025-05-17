/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Only applies when you manually add the 'dark' class
  content: [
    "./src/**/*.{vue,js,ts}",
    "./stories/**/*.{vue,js,ts}",
    "./.storybook/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
