<script setup>
import { RouterLink } from 'vue-router'
import { services } from '@/data/siteConfig'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <section
    id="services"
    class="bg-card"
    aria-labelledby="services-title"
  >
    <div class="mx-auto max-w-screen-2xl px-6 py-20 md:px-10 md:py-32">
      <SectionHeading
        id="services-title"
        index="03"
        title="Services"
        lead="Every project is planned individually. Tell me your idea and I will prepare a proposal around it."
      />

      <ol class="mt-14 md:mt-20">
        <ScrollReveal
          v-for="(service, index) in services"
          :key="service.title"
          as="li"
          :delay="index * 80"
          class="grid gap-3 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10"
        >
          <span
            class="text-xs tracking-[0.2em] text-muted-foreground md:col-span-2"
            aria-hidden="true"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <h3 class="font-serif text-3xl md:col-span-4 md:text-4xl">
            {{ service.title }}
          </h3>
          <p class="max-w-lg leading-relaxed text-muted-foreground md:col-span-6">
            {{ service.description }}
          </p>
        </ScrollReveal>
      </ol>

      <ScrollReveal class="mt-4 flex flex-col items-start justify-between gap-6 border-t border-foreground pt-10 md:flex-row md:items-center">
        <p class="max-w-xl font-serif text-2xl font-light md:text-3xl">
          Pricing depends on the project, its duration, and location.
        </p>
        <RouterLink
          to="/#contact"
          class="inline-flex items-center justify-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-opacity duration-300 hover:opacity-85"
        >
          Request a quote
        </RouterLink>
      </ScrollReveal>
    </div>
  </section>
</template>
