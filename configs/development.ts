import { baseConfig } from './base'

export default defineNuxtConfig({
  ...baseConfig,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  nitro: {
    ...baseConfig.nitro,
    logLevel: 'info', // Enable SSR logs during development
  },
  runtimeConfig: {
    // server-side only.
    public: {
      // server- and client-side.
      apiUrl: process.env.NUXT_PUBLIC_API_URL, //http://localhost:3000/api
      featureFlags: {
        enableDebugPanel: true,
        useMockData: true,
      },
    },
  },
})
