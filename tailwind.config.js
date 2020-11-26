module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.md', './src/**/*.njk'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss-debug-screens")]
}



// // tailwind.config.js -> To set your own breakpoints
// module.exports = {
//   theme: {
//     screens: {
//       sm: { min: "640px", max: "767px" },
//       md: { min: "768px", max: "1023px" },
//       lg: { min: "1024px", max: "1279px" },
//       xl: { min: "1280px" },
//     },
//   },
// };
