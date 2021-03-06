import Vue from 'vue';
import VueRouter from 'vue-router';
import Cats from '../views/Cats.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Cats',
    component: Cats,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import(/* webpackChunkName: "dogs" */ '../views/Dogs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
