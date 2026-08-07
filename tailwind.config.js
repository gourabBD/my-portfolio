/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: "#3B82F6",
          secondary: "#06B6D4",
          accent: "#8B5CF6",
          neutral: "#0F172A",
          "base-100": "#0B1120",
          "base-200": "#0F172A",
          "base-300": "#1E293B",
          "base-content": "#E2E8F0",
          info: "#0EA5E9",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
}
