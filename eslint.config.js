import { defineConfig } from 'eslint/config'
import js from '@eslint/js'

export default defineConfig([
  {
    ignores: ['node_modules/**', '.nuxt/**', 'dist/**', 'docs/**'],
  },
  {
    files: ['src/**/*.js'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
])
