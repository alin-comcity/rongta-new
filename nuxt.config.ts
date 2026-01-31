// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  site: {
    name: "Rongta Bangladesh",
    url: "https://rongta.com.bd",
    description: "Rongta Bangladesh - Point of Sales Solution in Bangladesh",
  },

  modules: ["@nuxtjs/seo", "@nuxtjs/tailwindcss"],
});
