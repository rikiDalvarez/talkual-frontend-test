// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi'],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    '/node_modules/primeflex/primeflex.css',
  ],
  build: {
    transpile: ['primevue']
  }
})
