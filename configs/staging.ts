import { baseConfig } from "./base"

export default defineNuxtConfig({
  ...baseConfig,
  devtools: {
    enabled: false,
  },
  nitro: {
    ...baseConfig.nitro,
    preset: "server", // Explicitly sets server mode for Node.js deployment
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
