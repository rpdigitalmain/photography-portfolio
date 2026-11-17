<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from '@lucide/vue'
import { navLinks, siteConfig } from '@/data/siteConfig'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

function updateScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenu() {
  open.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

watch(() => route.fullPath, closeMenu)
onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header :class="['sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm transition-colors duration-500', scrolled ? 'border-border' : 'border-transparent']">
    <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 md:h-20 md:px-10">
      <RouterLink
        to="/"
        class="group flex items-baseline gap-2"
        :aria-label="`${siteConfig.name}, home page`"
      >
        <span class="font-serif text-2xl leading-none tracking-tight md:text-[1.7rem]">{{ siteConfig.name }}</span>
        <span class="hidden text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">{{ siteConfig.tagline }}</span>
      </RouterLink>

      <nav
        aria-label="Main navigation"
        class="hidden md:block"
      >
        <ul class="flex items-center gap-10">
          <li
            v-for="link in navLinks"
            :key="link.href"
          >
            <RouterLink
              :to="link.href"
              class="nav-link relative text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="-mr-2 p-2 md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <X
          v-if="open"
          class="size-5"
          aria-hidden="true"
        />
        <Menu
          v-else
          class="size-5"
          aria-hidden="true"
        />
      </button>
    </div>

    <nav
      v-if="open"
      id="mobile-menu"
      aria-label="Mobile navigation"
      class="border-t border-border bg-background md:hidden"
    >
      <ul class="flex flex-col px-6 py-6">
        <li
          v-for="link in navLinks"
          :key="link.href"
        >
          <RouterLink
            :to="link.href"
            class="block py-3 font-serif text-3xl"
            @click="closeMenu"
          >{{ link.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
