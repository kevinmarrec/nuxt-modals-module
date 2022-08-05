<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { useFocus } from '@vueuse/core'

interface Emits {
  (event: 'close', text: string | null): void
}

const emit = defineEmits<Emits>()
const close = () => emit('close', null)
const closeWithText = (text: string) => emit('close', text)

const focusTarget = ref()
useFocus(focusTarget, { initialValue: true })

const text = ref('')
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-screen p-10 flex justify-center items-center bg-black/50">
    <div v-on-click-outside="close" class="flex flex-col justify-between bg-white p-4 rounded border-2 border-emerald-500 gap-10">
      <div class="flex justify-end">
        <button class="flex text-emerald-500" @click="close">
          <span class="i-mdi-close text-xl" />
        </button>
      </div>
      <input ref="focusTarget" v-model="text" class="rounded border-2 focus:outline-none focus:ring-emerald-500 text-black px-2 py-1">
      <div class="flex justify-between gap-4">
        <button class="w-full bg-red-500 rounded px-4 py-2" @click="close">
          Cancel
        </button>
        <button class="w-full bg-emerald-500 rounded px-4 py-2" @click="() => closeWithText(text)">
          Save
        </button>
      </div>
    </div>
  </div>
</template>
