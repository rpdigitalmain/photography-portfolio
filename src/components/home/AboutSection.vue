<script setup>
import { siteConfig } from '@/data/siteConfig'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-title"
    class="mx-auto max-w-screen-2xl px-6 py-20 md:px-10 md:py-32"
  >
    <SectionHeading
      id="about-title"
      index="02"
      title="About"
    />

    <div class="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
      <ScrollReveal class="md:col-span-5 md:col-start-3">
        <div class="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            :src="siteConfig.about.image.src"
            :alt="siteConfig.about.image.alt"
            class="size-full object-cover"
            loading="lazy"
          >
        </div>
      </ScrollReveal>

      <ScrollReveal
        :delay="150"
        class="flex flex-col justify-end md:col-span-4 md:col-start-9"
      >
        <p class="font-serif text-3xl font-light leading-tight md:text-4xl">
          I photograph so we can remember — and recognize ourselves in our own memories.
        </p>
        <div class="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p
            v-for="paragraph in siteConfig.about.bio"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
        <h3 class="mt-10 text-xs uppercase tracking-[0.25em]">
          Approach
        </h3>
        <p class="mt-3 leading-relaxed text-muted-foreground">
          {{ siteConfig.about.approach }}
        </p>
        <a
          href="#contact"
          class="mt-10 inline-flex items-center justify-center self-start bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-opacity duration-300 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Get in touch
        </a>
      </ScrollReveal>
    </div>
  </section>
</template>
