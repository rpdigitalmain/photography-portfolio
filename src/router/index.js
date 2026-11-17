import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import GalleryCategoryPage from '@/pages/GalleryCategoryPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/gallery/:category', name: 'gallery-category', component: GalleryCategoryPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
  ],
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    if (to.hash) {
      await nextTick()
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
