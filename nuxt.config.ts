// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  router: {
    base: '/artroom/'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper'],
  // swiper: {
  //   // Swiper options
  //   //----------------------
  //   // prefix: 'Swiper',
  //   // styleLang: 'css',
  //   // modules: ['navigation', 'pagination'], // all modules are imported by default
  // },

  css: ['~/assets/css/main.css'],
})