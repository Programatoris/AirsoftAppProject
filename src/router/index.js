import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SectionView from "@/views/SectionView.vue";
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
      path: '/get-started',
      name: 'Get Started',
      component: StartView,
    },
    {
      path: '/section/:slug',
      name: 'Section',
      component: SectionView,
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to, from) => {
  if (to.path !== from.path && !localStorage.getItem('reloaded')) {
    localStorage.setItem('reloaded', 'true');
    window.location.reload();
  } else {
    localStorage.removeItem('reloaded');
  }
});

export default router;
