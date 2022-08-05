import { addAutoImportDir, addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'modals',
  },
  async setup () {
    const { resolve } = createResolver(import.meta.url)

    addAutoImportDir(resolve('./runtime/composables'))

    addComponentsDir({
      path: resolve('./runtime/components'),
    })
  },
})
