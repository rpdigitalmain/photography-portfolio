<script setup>
import { ArrowDown } from '@lucide/vue'
import { siteConfig } from '@/data/siteConfig'
</script>

<template>
  <section
    aria-labelledby="hero-title"
    class="px-4 pb-16 md:px-10 md:pb-24"
  >
    <div class="relative h-[68svh] min-h-[420px] w-full overflow-hidden md:h-[78svh]">
      <img
        :src="siteConfig.heroImage.src"
        :alt="siteConfig.heroImage.alt"
        class="hero-image absolute inset-0 size-full object-cover"
        fetchpriority="high"
      >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div class="absolute inset-x-0 bottom-0 p-6 md:p-12">
        <p class="mb-4 text-[0.7rem] uppercase tracking-[0.3em] text-white/85">
          {{ siteConfig.location }}
        </p>
        <h1
          id="hero-title"
          class="max-w-3xl text-balance font-serif text-5xl font-light leading-[1.02] text-white md:text-7xl lg:text-8xl"
        >
          {{ siteConfig.heroTitle }}
        </h1>
      </div>
    </div>

    <div class="mx-auto mt-10 flex max-w-screen-2xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:px-2">
      <p class="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {{ siteConfig.heroSubtitle }}
      </p>
      <a
        href="#gallery"
        class="group inline-flex items-center gap-3 self-start border-b border-foreground pb-1 text-xs uppercase tracking-[0.25em] md:self-auto"
      >
        Explore photographs
        <ArrowDown
          class="size-4 transition-transform duration-500 group-hover:translate-y-1"
          aria-hidden="true"
        />
      </a>
    </div>
  </section>
</template>
