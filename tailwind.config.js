/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat'],
        'secundary': ['Neuton'],
        'text': ['Maven Pro']
      },
      colors: {
        // Primary colors
        primary: "#1e40af",      // Azul corporativo profesional
        'primary-dark': "#1e3a8a",  // Azul oscuro
        'primary-light': "#3b82f6", // Azul claro
        
        // Neutrals
        'bg-dark': "#0f172a",    // Fondo muy oscuro
        'bg-darker': "#020617",  // Fondo prácticamente negro
        'bg-light': "#f8fafc",   // Fondo claro
        'text-primary': "#1e293b", // Texto principal oscuro
        'text-secondary': "#64748b", // Texto secundario gris
        'text-light': "#f1f5f9", // Texto claro
        'border-color': "#e2e8f0", // Bordes
        
        // Accent
        accent: "#0891b2",        // Cyan para acentos
        'accent-light': "#06b6d4",
        
        // Semantic colors (mantenidos para transición)
        transparent: "transparent",
        white: "#ffffff",
      },
      spacing: {
        'section': '5rem',
      },
      "animation": {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      "keyframes": {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-80%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(30%)' },
        }
      }
    },
  },
  plugins: [],
}

