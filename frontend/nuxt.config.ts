// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devServer: {
    port: +(process.env.PORT || 8000),
    host: "0.0.0.0",
  },
  runtimeConfig: {
    public: {
      apiBase: "", // NUXT_PUBLIC_API
    },
  },
  css: ["~/assets/scss/main.scss"],
});
