import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavorisView from '../views/FavorisView.vue'
import ListePointsVente from '../views/PointsVente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: FavorisView,
    },
    {
      path: '/listepointsvente',
      name: 'pointsvente',
      component: ListePointsVente,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
