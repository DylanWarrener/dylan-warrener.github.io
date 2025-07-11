// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
import type { NuxtConfig } from "nuxt/schema"
import Checker from "vite-plugin-checker"

export const baseConfig: NuxtConfig = {
  srcDir: "src/",
  compatibilityDate: "2025-07-10",
  alias: {
    "@/abstractions": "./src/abstractions",
    "@/assets": "./src/assets",
    "@/components": "./src/components",
    "@/composables": "./src/composables",
    "@/layouts": "./src/layouts",
    "@/middleware": "./src/middleware",
    "@/pages": "./src/pages",
    "@/plugins": "./src/plugins",
    "@/server": "./src/server",
    "@/stores": "./src/stores",
    "@/types": "./src/types",
    "@/utils": "./src/utils",
  },
  app: {
    baseURL: "/",
    head: {
      title: "DRWDev - ",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Portfolio for showcasing my projects, skills, and knowledge.",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@pinia/nuxt", // Pinia auto-registered
    [
      // Simplest Vuetify 3 integration
      "vuetify-nuxt-module",
      {
        styles: "sass", // inject variables.scss automatically
        vuetifyOptions: {
          theme: { defaultTheme: "light" },
          autoImport: true,
        },
      },
    ],
  ],
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },
  css: [
    "vuetify/styles", // Vuetify base styles
    "@/assets/global.css",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false, // Required for Vuetify
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/assets/styles/variables.scss" as *;`,
        },
      },
    },
    plugins: [
      // Enables Vue TypeScript checking
      Checker({ vueTsc: true }),
    ],
    vueJsx: {
      mergeProps: true,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [], // extra dynamic routes if needed
    },
    output: { dir: "docs" }, // GitHub Pages looks here
  },
  routeRules: {
    "/": { prerender: true },
    "/projects": { swr: 3600 }, // updates hourly
    "/skills": { prerender: true },
    "/about": { prerender: true },
    "/contact": { ssr: true }, // live validation
    "/contact/**": { ssr: true },
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
    transpile: ["vuetify"],
  },
}
