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
    // Always scroll to the top when navigating to a new route
    return { top: 0 };
  }
});

// Use the afterEach hook to reload the page after route navigation
router.afterEach((to, from) => {
  // Only reload the page if the route changes and it's not a reload loop
  if (to.path !== from.path && !localStorage.getItem('reloaded')) {
    // Set a flag in localStorage to prevent infinite reload loops
    localStorage.setItem('reloaded', 'true');
    window.location.reload();
  } else {
    // Clear the reload flag when the page has been reloaded
    localStorage.removeItem('reloaded');
  }
});

export default router;
