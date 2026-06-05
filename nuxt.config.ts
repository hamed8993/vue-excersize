// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/i18n","@pinia/nuxt"],
  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "fa", language: "fa", file: "fa.json" },
    ],
    defaultLocale: "en",
    // langDir: "locales",
    strategy: "prefix",
  },
});
