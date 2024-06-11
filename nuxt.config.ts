// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-SJFSR2JHJE'
  },
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],

  experimental: {
    typedPages: true
  },

})