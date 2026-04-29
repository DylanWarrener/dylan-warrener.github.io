// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import type { NuxtConfig } from 'nuxt/schema'

import vuetifyModuleOptions from '../modules/vuetify'

export const baseConfig: NuxtConfig = {
  srcDir: 'src/',
  compatibilityDate: '2025-07-10',
  alias: {
    '@/interfaces': './src/interfaces',
    '@/types': './src/types',
    '@/assets': './src/assets',
    '@/base-components': './src/components/base',
    '@/components': './src/components/app',
    '@/composables': './src/composables',
    '@/layouts': './src/layouts',
    '@/middleware': './src/middleware',
    '@/pages': './src/pages',
    '@/plugins': './src/plugins',
    '@/server': './src/server',
    '@/stores': './src/stores',
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
          content:
            'Portfolio for showcasing my projects, skills, and knowledge.',
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  components: [
    {
      path: '~/components/base',
      pathPrefix: false,
    },
    {
      path: '~/components/app',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt', // Pinia auto-registeyeah
    'vuetify-nuxt-module',
  ],
  typescript: {
    typeCheck: false, // IMPORTANT: don't typecheck during nuxt build/generate otherwuse errors occur
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
    vuetifyOptions:
      vuetifyModuleOptions as unknown as Record<
        string,
        unknown
      >, // <- safest for now
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
  },
  routeRules: {
    '/**': { prerender: true },
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
