// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-primevue",
    "nuxt-icons",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  primevue: {
    ripple: true,
  },
  app: {
    head: {
      link: [
        {
          id: "theme-link",
          rel: "stylesheet",
          href: process.env.NUXT_BASE_URL + "aura-dark-amber/theme.css",
        },
      ],
    },
  },
});
