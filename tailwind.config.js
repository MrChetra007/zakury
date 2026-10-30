/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090807",
        coal: "#11100D",
        graphite: "#1A1814",
        porcelain: "#F4EFE5",
        sand: "#E4DACB",
        champagne: "#C7A15C",
        "champagne-light": "#E8D2A2",
        muted: "#9E9689",
        line: "rgba(244, 239, 229, 0.12)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        khmer: ['"Kantumruy Pro"', '"Noto Serif Khmer"', "sans-serif"],
        "khmer-display": ['"Noto Serif Khmer"', '"Kantumruy Pro"', "serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        mega: "0.34em",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", md: "2rem", xl: "3rem" },
        screens: { "2xl": "1320px" },
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(199,161,92,0.35), 0 24px 80px -30px rgba(199,161,92,0.35)",
        soft: "0 30px 90px -40px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(199,161,92,0.16), transparent 60%)",
        "luxury-mesh":
          "radial-gradient(ellipse at 15% 0%, rgba(199,161,92,0.14), transparent 45%), radial-gradient(ellipse at 85% 20%, rgba(116,86,44,0.16), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(26,24,20,0.9), transparent 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(1.35)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
