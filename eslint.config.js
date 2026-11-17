import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.npm-cache/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    // Temporarily allow intentionally empty templates in the project scaffold.
    files: [
      'src/App.vue',
      'src/components/common/PhotoBanner.vue',
      'src/components/common/ScrollReveal.vue',
      'src/components/common/SectionHeading.vue',
      'src/components/contact/ContactForm.vue',
      'src/components/gallery/CategoryGallery.vue',
      'src/components/home/AboutSection.vue',
      'src/components/home/ContactSection.vue',
      'src/components/home/GalleryCategories.vue',
      'src/components/home/HomeHero.vue',
      'src/components/home/ServicesSection.vue',
      'src/components/layout/SiteFooter.vue',
      'src/components/layout/SiteHeader.vue',
      'src/pages/GalleryCategoryPage.vue',
      'src/pages/HomePage.vue',
    ],
    rules: {
      'vue/valid-template-root': 'off',
    },
  },
]
