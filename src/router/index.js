import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/image',
    name: 'Image',
    component: () => import('../views/NewImage.vue'),
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue'),
  },
  {
    path: '/people',
    name: 'User',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/posts',
    name: 'Post',
    component: () => import('../views/NewPost.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
