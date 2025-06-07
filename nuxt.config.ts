// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  nitro: {
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
  css: [
    "vuetify/styles", // Vuetify base styles
    "@/assets/global.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "@/assets/variables.scss" as *;` },
      },
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
  runtimeConfig: {
    public: {
      siteName: "Dylan Warrener Portfolio",
    },
  },
  app: {
    baseURL: "/",
    head: {
      title: "Dylan Warrener — Full-Stack Developer",
      meta: [
        {
          name: "description",
          content: "Portfolio showcasing projects, skills and contact.",
        },
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
})
