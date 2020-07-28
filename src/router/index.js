import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue';
import Statistic from '@/pages/statistic/index.vue';

Vue.use(Router)

/*路由笔记
  & 以 / 开头的嵌套路径会被当作根路径
  & path(meta): 浏览器地址栏显示的路径名字，如果父路由的redirect是“no-redirect”，此时副路由的path设不设都没关系。
  & name:      路由的命名，方便在跳转路由的时候写。
  & component: 组件实际路径，形如：
              1、component: () => import('@/pages/error/404/404.vue')
              2、import HelloWorld from '@/components/HelloWorld'
                component: HelloWorld
  & children: 页面子组件路由配置
  & hidden:   决定是该模块在不在菜单显示(当redirect为"no-redirect"时，children里面设置hidden无用),
  & redirect: 路由重定向，页面在展示自己原有内容的基础上还需默认展示的子页面。
              实现此功能，除添加children和redirect属性外还需在父页面添加<router-view></router-view>
              'no-redirect'表示该模块的虽然有children,但是没有子菜单，即该children就是主菜单指向的路由。

*/
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
    }
  ]
})