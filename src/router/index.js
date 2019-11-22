import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Todo.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue'),
  },
  {
    path: '/zhuanlan',
    name: 'zhuanlan',
    component: () => import(/* webpackChunkName: "zhuanlan" */ '../views/Zhuanlan.vue'),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
