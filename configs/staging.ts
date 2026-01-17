import { baseConfig } from './base'

export default defineNuxtConfig({
  ...baseConfig,
  devtools: {
    enabled: false,
  },
  nitro: {
    ...baseConfig.nitro,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL, //"https://projectiq-staging.com/api",
      featureFlags: {
        useMockData: false,
      },
    },
  },
})
