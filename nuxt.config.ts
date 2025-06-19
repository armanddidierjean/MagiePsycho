// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/scripts", "@nuxt/image"],
  scripts: {
    registry: {
      umamiAnalytics: {
        websiteId: "c9a62922-c594-4dfd-864e-d7b621f8fd87",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  ssr: true,
});
