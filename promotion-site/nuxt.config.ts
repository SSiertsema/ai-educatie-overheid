// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  typescript: {
    strict: true
  },

  css: [
    '@your-org/design-system/css',
    '~/assets/brand-overlay.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@your-org/design-system/scss/tokens" as *;`
        }
      }
    }
  },

  nitro: {
    preset: 'static'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'nl' },
      title: 'AI-scholing voor de publieke sector',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Persona-gebaseerde AI-scholing voor gemeenten, rijk, provincies en uitvoeringsorganisaties.' }
      ]
    }
  }
})
