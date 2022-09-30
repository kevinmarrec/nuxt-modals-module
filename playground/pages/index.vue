<script setup>
import { MyModal } from '#components'

const { open } = useModals()

const text = ref('Click on the pen to change me !')

const edit = async () => {
  const newValue = await open(MyModal, { text })
  if (value !== null)
    text.value = newValue
}
</script>

<template>
  <div row class="justify-center items-center gap-2">
    <span class="text-lg">{{ text }}</span>
    <button class="i-mdi-pencil text-2xl text-indigo-500 hover:text-indigo-600" @click="edit" />
  </div>
</template>
