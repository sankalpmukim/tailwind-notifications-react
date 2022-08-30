/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "publish",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
};
