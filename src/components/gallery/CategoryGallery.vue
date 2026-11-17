<script setup>
import { RouterLink } from 'vue-router'
import { ArrowLeft } from '@lucide/vue'
import { categories } from '@/data/galleryData'
import ScrollReveal from '@/components/common/ScrollReveal.vue'

defineProps({ category: { type: Object, required: true } })
</script>

<template>
  <main
    id="main-content"
    class="mx-auto max-w-screen-2xl px-6 pb-24 pt-10 md:px-10 md:pt-16"
  >
    <RouterLink
      to="/#gallery"
      class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft
        class="size-4"
        aria-hidden="true"
      />
      All galleries
    </RouterLink>

    <header class="mt-10 grid gap-6 md:mt-14 md:grid-cols-12">
      <h1 class="font-serif text-6xl font-light leading-none md:col-span-7 md:text-8xl">
        {{ category.title }}
      </h1>
      <p class="max-w-md self-end leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
        {{ category.description }}
      </p>
    </header>

    <nav
      aria-label="Gallery categories"
      class="mt-10 border-y border-border"
    >
      <ul class="flex flex-wrap gap-x-8 gap-y-2 py-4">
        <li
          v-for="item in categories"
          :key="item.slug"
        >
          <RouterLink
            :to="`/gallery/${item.slug}`"
            :aria-current="item.slug === category.slug ? 'page' : undefined"
            :class="['text-xs uppercase tracking-[0.2em] transition-colors', item.slug === category.slug ? 'text-foreground underline underline-offset-8' : 'text-muted-foreground hover:text-foreground']"
          >
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="mt-12 columns-1 gap-6 md:mt-16 md:columns-2 md:gap-10">
      <ScrollReveal
        v-for="(photo, index) in category.photos"
        :key="photo.src"
        as="figure"
        :delay="(index % 2) * 120"
        class="mb-10 break-inside-avoid md:mb-16"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          :width="photo.width"
          :height="photo.height"
          :loading="index < 2 ? 'eager' : 'lazy'"
          class="h-auto w-full bg-muted"
        >
        <figcaption class="mt-3 flex justify-between gap-4 text-xs tracking-wide text-muted-foreground">
          <span>{{ photo.caption }}</span>
          <span aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        </figcaption>
      </ScrollReveal>
    </div>

    <div class="mt-8 flex flex-col items-start justify-between gap-6 border-t border-foreground pt-10 md:flex-row md:items-center">
      <p class="font-serif text-3xl font-light">
        Would you like this perspective for your project?
      </p>
      <RouterLink
        to="/#contact"
        class="bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-85"
      >
        Request a quote
      </RouterLink>
    </div>
  </main>
</template>
