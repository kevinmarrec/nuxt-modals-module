<script setup>
import { useModals } from '#imports'

const props = defineProps({
  scope: {
    type: String,
    required: false,
  },
  transition: {
    type: String,
    default: 'default',
  },
})

const { modals } = useModals(props.scope)
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

<style lang="postcss" scoped>
.default-enter-active,
.default-leave-active {
  transition: opacity 0.3s ease-out;
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
}
</style>
