<script setup>
import { siteConfig } from '@/data/siteConfig'
import ContactForm from '@/components/contact/ContactForm.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="mx-auto max-w-screen-2xl px-6 py-20 md:px-10 md:py-32"
  >
    <SectionHeading
      id="contact-title"
      index="04"
      title="Contact"
      lead="For bookings, collaborations, or simply a conversation about photography."
    />

    <div class="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
      <ScrollReveal class="md:col-span-4 md:col-start-3">
        <h3 class="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Email
        </h3>
        <a
          :href="`mailto:${siteConfig.email}`"
          class="mt-3 inline-block break-all font-serif text-2xl underline-offset-4 hover:underline md:text-3xl"
        >
          {{ siteConfig.email }}
        </a>
        <h3 class="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Social
        </h3>
        <ul class="mt-3 space-y-2">
          <li
            v-for="social in siteConfig.socials"
            :key="social.label"
          >
            <a
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg underline-offset-4 hover:underline"
            >
              {{ social.label }}<span class="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        <h3 class="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Based in
        </h3>
        <p class="mt-3 text-lg">
          {{ siteConfig.location }}
        </p>
      </ScrollReveal>

      <ScrollReveal
        :delay="150"
        class="md:col-span-6 md:col-start-7"
      >
        <ContactForm />
      </ScrollReveal>
    </div>
  </section>
</template>
