import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/HelloWorld'
import index from '@/views/index'
import mine from './mine'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/time',
    name: 'time',
    component: () => import('@/views/time/time')
  },
  ...mine
];
const router = new Router({
  mode: 'hash',
  routes,
});

export default router
