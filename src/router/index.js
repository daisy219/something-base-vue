import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue';
import Statistic from '@/pages/statistic/index.vue';
import Test from '@/pages/test/index.vue';

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: Statistic,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ]
})