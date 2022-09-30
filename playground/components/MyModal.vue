<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { useFocus } from '@vueuse/core'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'close', text: string | null): void
}>()

const close = (text?: string | MouseEvent) => emit('close', typeof text === 'string' ? text : null)

const focusTarget = ref()
useFocus(focusTarget, { initialValue: true })

const text = ref(props.text)
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-screen p-10 flex justify-center items-center bg-black/75">
    <div v-on-click-outside="close" class="justify-between bg-gray-900 p-4 rounded border-2 border-indigo-500 gap-5">
      <div row class="justify-center items-center">
        <input ref="focusTarget" v-model="text" class="rounded border-2 focus:outline-none focus:ring-emerald-500 text-black px-2 py-1">
      </div>
      <div row class="justify-between gap-4">
        <button class="w-full bg-red-700 rounded px-4 py-2" @click="close">
          Cancel
        </button>
        <button class="w-full bg-indigo-500 rounded px-4 py-2" @click="() => close(text)">
          Save
        </button>
      </div>
    </div>
  </div>
</template>
