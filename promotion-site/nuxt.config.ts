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
      htmlAttrs: {
        lang: 'nl',
        'data-theme': 'light' // activeert design-system tokens (zie design-system/dist/css/theme-light.css)
      },
      title: 'AI-scholing voor de publieke sector',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Persona-gebaseerde AI-scholing voor gemeenten, rijk, provincies en uitvoeringsorganisaties.' }
      ],
      link: [
        // IBM Plex Sans + Mono — declared in design-system tokens, geladen via Google Fonts.
        // Wanneer de DS in de toekomst zelf fontfiles bundelt, kan dit blok eruit.
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap'
        }
      ]
    }
  }
})
