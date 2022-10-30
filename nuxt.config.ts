// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
  css: ["vuetify/lib/styles/main.sass","@/assets/css/styles.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [eslintPlugin()],
    define: {
      "process.env.DEBUG": false,
    },
  },
});
