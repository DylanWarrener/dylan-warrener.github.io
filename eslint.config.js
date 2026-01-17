import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'docs/**', 'dist/**'],
})
