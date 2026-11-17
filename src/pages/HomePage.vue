<script setup>
import { onMounted } from 'vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import GalleryCategories from '@/components/home/GalleryCategories.vue'
import PhotoBanner from '@/components/common/PhotoBanner.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import { siteConfig } from '@/data/siteConfig'

onMounted(() => {
  document.title = `${siteConfig.name} — ${siteConfig.tagline}`
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', siteConfig.heroSubtitle)
})
</script>

<template>
  <SiteHeader />
  <main id="main-content">
    <HomeHero />
    <GalleryCategories />
    <PhotoBanner
      src="/images/site/memory-banner.webp"
      src-set="/images/site/memory-banner-768.webp 768w, /images/site/memory-banner.webp 1376w"
      alt="White curtain moving in the breeze beside an open window and an empty chair"
      quote="A photograph is a memory we choose not to let go."
      attribution="On memory"
    />
    <AboutSection />
    <ServicesSection />
    <PhotoBanner
      src="/images/site/light-banner.webp"
      src-set="/images/site/light-banner-768.webp 768w, /images/site/light-banner.webp 1376w"
      alt="Calm sea horizon beneath low clouds, with a distant figure standing on the rocks"
      quote="I wait for the light as if for someone I love to arrive."
      attribution="On the process"
    />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
