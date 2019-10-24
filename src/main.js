import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';

import '@/assets/stylus/reset.styl';
import '@/assets/stylus/index.styl';

import Layout from '@/layout/index.vue';


Vue.config.productionTip = false


Vue.component('layout', Layout);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
