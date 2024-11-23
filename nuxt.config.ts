// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/dylan-warrener.github.io/', // Set your repository name for GitHub Pages
  },
  nitro: {
    preset: 'static', // Ensure static site generation
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
