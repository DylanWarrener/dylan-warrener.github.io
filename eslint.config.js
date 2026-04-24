import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    stylistic: false,
  },
})
  // Default rules
  .append({
    ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'docs/**', 'dist/**'],
    rules: {
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/no-template-shadow': 'warn',
      'vue/require-default-prop': 'warn',
    },
  })
  // ✅ Enforces multi-word component names for components.
  .append({
    files: ['src/components/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'error',
    },
  })
  // ❌ Disables multi-word component names for layouts and pages, as single word files such as index.vue as accepted convention for Nuxt.
  .append({
    files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
