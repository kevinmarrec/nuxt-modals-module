<script setup>
import { useModals } from '#imports'

defineProps({
  transition: {
    type: String,
    default: 'modal',
  },
})

const { modals } = useModals()
</script>

<template>
  <TransitionGroup :name="transition">
    <Component
      :is="modal.component" v-for="(modal, i) in modals"
      :key="`${modal.component}${i}`"
      v-bind="modal.bindings"
    />
  </TransitionGroup>
</template>

<style lang="postcss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
