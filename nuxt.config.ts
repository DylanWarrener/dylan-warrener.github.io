import vuetify from 'vite-plugin-vuetify';
import Checker from 'vite-plugin-checker';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  alias: {
    '@/src': './src'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    baseURL: '/dylan-warrener.github.io/', 
  },
  plugins: ['~/plugins/vuetify'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@pinia/nuxt'],
  css: ['vuetify/styles', '@/assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false, // Required for Vuetify
    },
    plugins: [
      vuetify({
        autoImport: true,
      }),
      Checker({
        vueTsc: true, // Enables Vue TypeScript checking
      }),
    ],
  },
  typescript: {
    strict: true,
    typeCheck: true, // Enables type-checking at build/development time.
  },
  imports: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {},
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  nitro: {
    preset: 'static', // Ensure static site generation
  }
})
