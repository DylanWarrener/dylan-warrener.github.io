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
    // server-side only.
    public: {
      // server- and client-side.
      apiUrl: process.env.NUXT_PUBLIC_API_URL, //"https://projectiq.com/api",
    },
  },
})
