/**
 * ESLint Configuration
 * - Vue 3 + Vuetify + Storybook project
 * - Comments are added to help with understanding each section!
 */
module.exports = {
  // Indicate that this is the root config (stop ESLint from looking further up)
  root: true,

  // Environments define global variables (e.g., browser, Node, ES2021)
  env: {
    browser: true,
    node: true,
    es2021: true, // Enable ES12 globals like Promise
  },

  // Parser options for ECMAScript features
  parserOptions: {
    ecmaVersion: 2021, // Allow modern ECMAScript syntax
    sourceType: "module", // Use ES modules
  },

  // Extend recommended rule sets
  extends: [
    "eslint:recommended", // ESLint's core recommended rules
    "plugin:vue/vue3-recommended", // Recommended rules for Vue 3
    "plugin:vuetify/recommended", // Recommended rules for Vuetify components
  ],

  // Plugins to use
  plugins: ["vue", "vuetify"],

  // Custom rules
  rules: {
    // Allow single-word component names
    "vue/multi-word-component-names": "off",
    // Warn when using deprecated Vuetify classes
    "vuetify/no-deprecated-classes": "warn",
  },

  // Override settings for specific file patterns
  overrides: [
    {
      // Settings for Jest test files
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true, // Jest globals (describe, it, expect)
      },
    },
    {
      // Settings for Storybook story files
      files: ["*.stories.js", "*.stories.ts", "*.stories.tsx", "*.stories.vue"],
      extends: ["plugin:storybook/recommended"], // Storybook plugin rules
      rules: {
        // Storybook prefers default exports
        "import/no-default-export": "off",
      },
    },
  ],
}
