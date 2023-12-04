// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devServer: {
    port: +(process.env.PORT || 8000),
  },
  runtimeConfig: {
    public: {
      apiBase: "", // NUXT_PUBLIC_API
    },
  },
  css: ["~/assets/scss/main.scss"],
});
