import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from "@/views/DestinationView.vue";
import StartView from "@/views/StartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/start',
      name: 'Start',
      component: StartView,
    },
    {
      path: '/section/:slug',
      name: 'Section',
      component: DestinationView,
      children: [
        {
          path: '/section/:slug/experience/:experienceSlug',
          name: 'Experience',
          component: () => import('../views/ExperienceView.vue'),
        }
      ]
    }
  ],
})

export default router