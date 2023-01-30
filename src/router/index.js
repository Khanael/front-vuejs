import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chatrooms',
      name: 'chatrooms',
      component: () => import('../views/ChatroomsView.vue'),
    },
    {
      path: '/chatrooms/:id',
      name: 'chatroom',
      props: true,
      component: () => import('../views/ChatroomView.vue'),
    },
  ],
})

export default router
