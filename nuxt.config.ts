// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      charset: "utf-16",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0",
      title: "GOL GOL! | Futbol en vivo",
      meta: [
        {
          name: "description",
          content:
            "tarjeta Roja Tv, PirloTv, Partido en Vivo, ROJADIRECTA, tarjeta roja, Elitegol, VipGoal, tarjetarojaonline, roja directa online, rojadirecta.me, rojadirecta.net, rojadirecta.es, rojadirecta.com, rojadirecta.it Pirlotv.online JustinTv Futbol en Vivo liga mx Real Madrid vs Barcelona por ceular y tablet. GOL gol gooo! Tarjeta Roja TV, Futbol En Vivo, LaLiga de España, Serie A, Premier League, UEFA Champions League, Bundesliga, ligamx ...",
        },
        {
          name: "keywords",
          content:
            "tarjeta roja, tarjetaroja, rojadirecta, roja tarjeta, laroja, ver Justin TV, PirloTv, Ronaldo7, Ver Futbol Online, Futbol en vivo, Futbol por Internet, TarjetarojaTv, ver en vivo, tv online, Tarjetaroja, Tarjetaroja Tv, Roja Directa, Rojadirecta, Futbol online, Futbol en directo, Deportes online, resultados de Futbol. Television en vivo por internet, CMD en vivo, directv, La liga BBVA, Brasil 2014, TV en vivo, deportes, en vivo, psg, barca, online, Liga MX, 2015, ao vivo, jogo, assistir, watch live, Copa Pilsener.",
        },
        { name: "distribution", content: "global" },
        { name: "robots", content: "all" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script:[
        {
          hid:'gtm',
          type:"text/javascript",
          children:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MH39K7S');`
        }
      ],
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MH39K7S" 
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          body: true
        },
      ],
    },
  },
  css: ["@/assets/css/styles.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [eslintPlugin()],
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-lodash",
    "@vueuse/nuxt",
    // "nuxt-purgecss",
    "@nuxtjs/partytown",
    "@nuxtjs/robots",
  ],
  purgecss: {
    enabled: true,
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
    ],
    fontFace: true,
    keyframes: true,
    variables: true,
    safelist: {
      deep: [/^v-.*/, /^text/],
      greedy: [
        /font/,

        // /^font.*/,
        // /^text.*/,
        // /^v-layout/,
        // /^v-icon/,
        // /^col-.*/,
        // /^theme-.*/,
        // /^rounded-.*/,
        // /^data-aos-.*/,
        // /^(red|grey)--text$/,
        // /^text--darken-[1-4]$/,
        // /^text--lighten-[1-4]$/,
        // /^v-table.*/,
        // /^post-content/,
        // /^v-input.*/,
        // /^v-text.*/,
        // /^v-field.*/,
        // /^v-toolbar.*/,
        // /^v-app.*/,
        // /^v-btn.*/,
        // /^v-progress-linear/,
        // /^v-label/,
        // /-(leave|enter|appear)(|-(to|from|active))$/,
      ],
    },
    defaultExtractor(content) {
      const contentWithoutStyleBlocks = content.replace(
        /<style[^]+?<\/style>/gi,
        ""
      );
      return (
        contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
        []
      );
    },
  },
  buildModules: [/* "@nuxtjs/html-validator" */ "@nuxtjs/google-fonts"],
  htmlValidator: {
    usePrettier: false,
    logLevel: "verbose",
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "Bungee+Outline": true,
    },
    prefetch: false,
    preconnect: false,
    preload: false,
  }
})
