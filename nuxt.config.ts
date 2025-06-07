// nuxt.config.ts
import vuetify from "vite-plugin-vuetify"
import Checker from "vite-plugin-checker"

export default defineNuxtConfig({
  srcDir: "src/",
  compatibilityDate: "2025-05-15",
  alias: {
    "@/abstractions": "./src/abstractions",
    "@/assets": "./src/assets",
    "@/components": "./src/components",
    "@/layouts": "./src/layouts",
    "@/middleware": "./src/middleware",
    "@/pages": "./src/pages",
    "@/plugins": "./src/plugins",
    "@/server": "./src/server",
    "@/stores": "./src/stores",
    "@/utils": "./src/utils",
  },
  app: {
    baseURL: "/",
    head: {
      title: "Dylan Warrener — Full-Stack Developer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Portfolio showcasing projects, skills and contact.",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  plugins: ["~/plugins/vuetify"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@pinia/nuxt", // Pinia auto-registered
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    [
      // Simplest Vuetify 3 integration
      "vuetify-nuxt-module",
      {
        styles: "sass", // inject variables.scss automatically
        vuetifyOptions: {
          // ← goes here
          theme: { defaultTheme: "light" },
        },
      },
    ],
  ],
  typescript: {
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
        scss: { additionalData: `@use "@/assets/variables.scss" as *;` },
      },
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
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: [], // extra dynamic routes if needed
    },
    output: { dir: "docs" }, // GitHub Pages looks here  :contentReference[oaicite:0]{index=0}
  },
  routeRules: {
    "/": { prerender: true }, // home
    "/projects": { swr: 3600 }, // updates hourly  :contentReference[oaicite:1]{index=1}
    "/skills": { prerender: true },
    "/about": { prerender: true },
    "/contact": { ssr: true }, // live validation
    "/contact/**": { ssr: true },
    "/api/contact-form": {
      cors: true, // allow XHR from site only
    },
  },
  runtimeConfig: {
    public: {
      siteName: "Dylan Warrener Portfolio",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
