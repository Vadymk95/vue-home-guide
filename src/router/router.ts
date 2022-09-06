import MainPage from '@/pages/MainPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import SignIn from '@/pages/auth/SignIn.vue';
import SignUp from '@/pages/auth/SignUp.vue';
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

interface IRoutes {
  beforeEnter?: ({ name }: { name: string }) => void;
}

/**
 * @type {boolean}
 */
const isAuthorized = localStorage.hasOwnProperty('token');

const authGuard = (next: ({ name }: { name: string }) => void) => {
  if (!isAuthorized) {
    next({ name: '/auth/signin' });
  } else {
    next({ name: '/about' });
  }
};

const managerAuthGuard = (next: ({ name }: { name: string }) => void) => {
  if (!isAuthorized) {
    next({ name: '/auth/signin' });
  } else if (localStorage.getItem('userRole') !== 'admin') {
    next({ name: '/' });
  } else {
    next({ name: '/about' });
  }
};

const routes: readonly RouteRecordRaw[] & any = [
  {
    path: '/',
    component: MainPage,
    beforeEnter: authGuard,
  },
  {
    path: '/products',
    component: ProductsPage,
    beforeEnter: managerAuthGuard,
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
