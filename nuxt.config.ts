// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-SJFSR2JHJE'
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