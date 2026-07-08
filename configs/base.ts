// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export const baseConfig = defineNuxtConfig({
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
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap',
        },
      ],
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
    '@pinia/nuxt',
    'vuetify-nuxt-module',
  ],

  typescript: {
    typeCheck: false,
    strict: true,
    shim: false,
  },

  css: [
    'vuetify/styles',
    '@/assets/styles/variables.scss',
    '@/assets/styles/global.css',
  ],

  vuetify: {
    moduleOptions: {
      styles: 'sass',
    },
    vuetifyOptions: './vuetify.config.ts',
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    vueJsx: {
      mergeProps: true,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  runtimeConfig: {
    public: {},
  },

  build: {
    transpile: ['vuetify'],
  },
})
