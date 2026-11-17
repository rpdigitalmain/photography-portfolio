<script setup>
import { RouterLink } from 'vue-router'
import { categories } from '@/data/galleryData'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <section
    id="gallery"
    aria-labelledby="gallery-title"
    class="mx-auto max-w-screen-2xl px-6 py-20 md:px-10 md:py-32"
  >
    <SectionHeading
      id="gallery-title"
      index="01"
      title="Gallery"
      lead="Four ways of looking for the same things: light, gesture, and memory."
    />

    <ul class="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-20 lg:gap-x-12">
      <ScrollReveal
        v-for="(category, index) in categories"
        :key="category.slug"
        as="li"
        :delay="(index % 2) * 120"
        :class="['', index % 2 === 1 ? 'sm:mt-24' : '']"
      >
        <RouterLink
          :to="`/gallery/${category.slug}`"
          class="group block"
        >
          <div class="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              :src="category.photos[0].src"
              :alt="category.photos[0].alt"
              class="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            >
          </div>
          <div class="mt-5 flex items-baseline justify-between gap-4">
            <h3 class="font-serif text-3xl md:text-4xl">{{ category.title }}</h3>
            <span class="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {{ String(category.photos.length).padStart(2, '0') }} images
            </span>
          </div>
          <p class="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{{ category.description }}</p>
          <span class="mt-4 inline-block text-xs uppercase tracking-[0.2em] underline-offset-4 group-hover:underline">
            View gallery
          </span>
        </RouterLink>
      </ScrollReveal>
    </ul>
  </section>
</template>
