<script setup>
import { computed, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CategoryGallery from '@/components/gallery/CategoryGallery.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { getCategory } from '@/data/galleryData'
import { siteConfig } from '@/data/siteConfig'

const route = useRoute()
const category = computed(() => getCategory(String(route.params.category ?? '')))

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.title = category.value
    ? `${category.value.title} — ${siteConfig.name} ${siteConfig.tagline}`
    : `Gallery not found — ${siteConfig.name}`

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', category.value?.description ?? siteConfig.heroSubtitle)
})
</script>

<template>
  <SiteHeader />
  <CategoryGallery
    v-if="category"
    :category="category"
  />
  <main
    v-else
    id="main-content"
    class="mx-auto min-h-[60vh] max-w-screen-2xl px-6 py-24 md:px-10"
  >
    <h1 class="font-serif text-5xl md:text-7xl">
      Gallery not found
    </h1>
    <p class="mt-6 text-muted-foreground">
      This gallery is not available.
    </p>
    <RouterLink
      to="/"
      class="mt-8 inline-block underline underline-offset-4"
    >Return to the home page</RouterLink>
  </main>
  <SiteFooter />
</template>
