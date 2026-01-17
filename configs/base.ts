// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import type { NuxtConfig } from 'nuxt/schema'

import vuetifyModuleOptions from '../modules/vuetify'

export const baseConfig: NuxtConfig = {
  srcDir: 'src/',
  compatibilityDate: '2025-07-10',
  alias: {
    '@/abstractions': './src/abstractions',
    '@/assets': './src/assets',
    '@/components': './src/components',
    '@/composables': './src/composables',
    '@/layouts': './src/layouts',
    '@/middleware': './src/middleware',
    '@/pages': './src/pages',
    '@/plugins': './src/plugins',
    '@/server': './src/server',
    '@/stores': './src/stores',
    '@/types': './src/types',
    '@/utils': './src/utils',
  },
  app: {
    baseURL: '/',
    head: {
      titleTemplate: 'DRWDev - %s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Portfolio for showcasing my projects, skills, and knowledge.',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt', // Pinia auto-registeyeah
    'vuetify-nuxt-module',
  ],
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },
  css: [
    'vuetify/styles', // 1. Vuetify's styles (lowest priority)
    '@/assets/styles/variables.scss', // 2. SCSS overrides (if any, e.g. color SASS vars)
    '@/assets/styles/global.css', // 3. Your custom styles (highest priority)
  ],
  vuetify: {
    moduleOptions: {
      styles: 'sass', // Enables SASS variable customization
    },
    vuetifyOptions: vuetifyModuleOptions as any, // <- safest for now
  },
  vite: {
    define: {
      'process.env.DEBUG': false, // Required for Vuetify
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [], // extra dynamic routes if needed
    },
    output: { dir: 'docs' }, // GitHub Pages looks here
  },
  routeRules: {
    '/': { prerender: true },
    '/projects': { swr: 3600 }, // updates hourly
    '/skills': { prerender: true },
    '/about': { prerender: true },
    '/contact': { ssr: true }, // live validation
    '/contact/**': { ssr: true },
    // "/api/contact-form": {
    //   cors: true, // allow XHR from site only
    // },
  },
  runtimeConfig: {
    // server-side only.
    public: {
      // server- and client-side.
    },
  },
  build: {
    transpile: ['vuetify'],
  },
}
