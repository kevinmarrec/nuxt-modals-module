import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'modals',
  },
  async setup () {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    addImportsDir(resolve('./runtime/composables'))
  },
})
