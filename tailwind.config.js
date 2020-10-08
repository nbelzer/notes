module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      `_site/**/*.html`
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui'),
  ]
}
