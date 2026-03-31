import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import EventosPage from '../views/EventosPage.vue'
import EventoDetalhePage from '../views/EventoDetalhePage.vue'
import FavoritosPage from '../views/FavoritosPage.vue'
import PerfilPage from '../views/PerfilPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  { path: '/eventos', component: EventosPage },
  { path: '/eventos/:id', component: EventoDetalhePage },
  { path: '/favoritos', component: FavoritosPage },
  { path: '/perfil', component: PerfilPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
