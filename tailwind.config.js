module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  theme: {
    colors: {
      yellow: "#ffe500",
      orange: "#f28b27",
      red: "#c429a9",
      blue: "#4445ff",
      green: "#0bf131",
      purple: {
        dark: "#150411",
        DEFAULT: "#150411",
        light: "#281428",
      },
      tp: {
        heavy: "rgba(255,255,255,0.05)",
        light: "rgba(255,255,255,0.5)",
      },
      white: "#fff",
    },
    fontFamily: {
      sans: ["Recoleta Alt", "sans-serif"],
      icon: ["Material Design Icons"],
    },
    backgroundSize: {
      screen: "250vh",
    },
    fill: (theme) => ({
      purple: theme("colors.purple.light"),
    }),
    backgroundImage: (theme) => ({
      photocopy: "url('../assets/pattern.png')",
    }),
    extend: {
      transitionTimingFunction: {
        back: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  corePlugins: {
    gradientColorStops: false,
  },
  plugins: [require("tailwindcss-css-filters")],
}
