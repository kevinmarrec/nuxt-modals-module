<script setup>
import { MyModal } from '#components'
const { open } = useModals()

const text = ref('')
const getText = async () => {
  const value = await open(MyModal)
  if (value !== null)
    text.value = value
}
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    Text: {{ text }}
    <button class="rounded bg-emerald-500 bg-emerald-500 px-3 py-2 hover:bg-emerald-400" @click="getText">
      Click me to change text
    </button>
  </div>
</template>
