<script setup>
import ScrollReveal from './ScrollReveal.vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  quote: { type: String, required: true },
  attribution: { type: String, default: '' },
})
</script>

<template>
  <section
    aria-label="Photography quote"
    class="relative h-[60svh] min-h-[360px] w-full overflow-hidden md:h-[75svh]"
  >
    <img
      :src="src"
      :alt="alt"
      class="absolute inset-0 size-full object-cover"
      loading="lazy"
    >
    <div
      class="absolute inset-0 bg-black/45"
      aria-hidden="true"
    />
    <div class="relative flex h-full items-center justify-center px-6">
      <ScrollReveal class="max-w-3xl text-center">
        <blockquote>
          <p class="text-balance font-serif text-3xl font-light italic leading-snug text-white md:text-5xl">
            “{{ quote }}”
          </p>
          <footer
            v-if="attribution"
            class="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-white/85"
          >
            {{ attribution }}
          </footer>
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
</template>
