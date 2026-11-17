<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { navLinks, siteConfig } from '@/data/siteConfig'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-foreground text-background">
    <div class="mx-auto max-w-screen-2xl px-6 pb-10 pt-16 md:px-10 md:pt-24">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-6">
          <RouterLink
            to="/"
            class="font-serif text-5xl font-light leading-none md:text-7xl"
          >{{ siteConfig.name }}</RouterLink>
          <p class="mt-4 text-xs uppercase tracking-[0.25em] text-background/70">
            {{ siteConfig.tagline }}
          </p>
        </div>

        <nav
          aria-label="Quick links"
          class="md:col-span-2 md:col-start-8"
        >
          <h2 class="text-xs uppercase tracking-[0.25em] text-background/60">
            Navigation
          </h2>
          <ul class="mt-4 space-y-2">
            <li
              v-for="link in navLinks"
              :key="link.href"
            >
              <RouterLink
                :to="link.href"
                class="text-background/90 underline-offset-4 hover:text-background hover:underline"
              >{{ link.label }}</RouterLink>
            </li>
          </ul>
        </nav>

        <div class="md:col-span-3">
          <h2 class="text-xs uppercase tracking-[0.25em] text-background/60">
            Social and contact
          </h2>
          <ul class="mt-4 space-y-2">
            <li
              v-for="social in siteConfig.socials"
              :key="social.label"
            >
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-background/90 underline-offset-4 hover:text-background hover:underline"
              >
                {{ social.label }}<span class="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${siteConfig.email}`"
                class="break-all text-background/90 underline-offset-4 hover:text-background hover:underline"
              >{{ siteConfig.email }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 flex flex-col gap-2 border-t border-background/20 pt-6 text-xs text-background/70 md:flex-row md:justify-between">
        <p>© {{ year }} {{ siteConfig.name }}. All rights reserved.</p>
        <p>All photographs are protected by copyright.</p>
      </div>
    </div>
  </footer>
</template>
