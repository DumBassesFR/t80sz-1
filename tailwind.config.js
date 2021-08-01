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
      yellow: { 
        DEFAULT: "#FFE500",
        light: "#271C07",
        lightclr: "#FFEA33"
      },
      orange: "#f28b27",
      blue: { 
        DEFAULT: "#4445ff",
        light: "#181428",
        lightclr: "#696AFF"
      },
      green: "#0bf131",
      purple: {
        dark: "#150411",
        DEFAULT: "#c429a9",
        light: "#281428",
        lightclr: "#D054BA"
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
      scale: {
        60: '0.6'
      },
      fontSize: {
        '4.5xl': '2.5em',
      }
    },
  },
  corePlugins: {
    gradientColorStops: false,
  },
  plugins: [require("tailwindcss-css-filters")],
}
