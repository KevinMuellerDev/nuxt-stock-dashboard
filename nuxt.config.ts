// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head:{
      title: 'Nuxt-Stock'
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false, // Deaktiviert Server-Side Rendering, aktiviert den SPA-Modus,
  css: [
    '@/assets/scss/fonts.css' // Importiere die CSS-Datei mit den Fonts
  ]
})
