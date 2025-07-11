/** @type {import('tailwindcss').Config} */
import tailwnidplgn from './plugins/tailwnidplgn.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwnidplgn,
  ],
}