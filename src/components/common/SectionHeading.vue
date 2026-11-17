<script setup>
import ScrollReveal from './ScrollReveal.vue'

defineProps({
  index: { type: String, required: true },
  id: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <ScrollReveal class="grid gap-6 border-t border-border pt-6 md:grid-cols-12">
    <span
      class="text-xs tracking-[0.2em] text-muted-foreground md:col-span-2"
      aria-hidden="true"
    >
      {{ index }}
    </span>
    <div class="md:col-span-10">
      <h2
        :id="id"
        class="font-serif text-5xl font-light leading-none md:text-7xl"
      >
        {{ title }}
      </h2>
      <p
        v-if="lead"
        class="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground"
      >
        {{ lead }}
      </p>
    </div>
  </ScrollReveal>
</template>
