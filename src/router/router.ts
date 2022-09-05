import MainPage from '@/pages/MainPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import SignIn from '@/pages/auth/SignIn.vue';
import SignUp from '@/pages/auth/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/products',
    component: ProductsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/products/:id',
    component: ProductPage,
  },
  {
    path: '/auth/signin',
    component: SignIn,
  },
  {
    path: '/auth/signup',
    component: SignUp,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
