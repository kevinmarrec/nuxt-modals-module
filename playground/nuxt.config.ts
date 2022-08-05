import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '../dist/module.mjs',
  ],
  unocss: {
    preflight: true,
    icons: true,
  },
})
