<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => {
  document.title = 'Page not found — Helena Duarte'
})
</script>

<template>
  <main
    id="main-content"
    class="mx-auto flex min-h-[70vh] max-w-screen-2xl flex-col justify-center px-6 py-24 md:px-10"
  >
    <p class="eyebrow">
      404 · Page not found
    </p>
    <h1 class="mt-5 max-w-3xl font-serif text-6xl font-light md:text-8xl">
      This page has wandered off.
    </h1>
    <p class="mt-6 max-w-lg text-muted-foreground">
      The page may have moved, or the address may be incomplete.
    </p>
    <RouterLink
      to="/"
      class="mt-8 inline-flex self-start border-b border-foreground pb-1 text-xs uppercase tracking-[0.2em]"
    >
      Return home
    </RouterLink>
  </main>
</template>
