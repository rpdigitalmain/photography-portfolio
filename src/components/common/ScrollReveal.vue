<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  as: { type: String, default: 'div' },
  delay: { type: Number, default: 0 },
})
const element = ref(null)
const visible = ref(false)
let observer

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  )
  if (element.value) observer.observe(element.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <component
    :is="props.as"
    ref="element"
    class="reveal"
    :data-visible="visible"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </component>
</template>
