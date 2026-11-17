<script setup>
import { Analytics } from '@vercel/analytics/vue'
import { RouterView } from 'vue-router'

const isProduction = import.meta.env.PROD
</script>

<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
  >
    Skip to content
  </a>
  <RouterView />
  <Analytics v-if="isProduction" />
</template>
