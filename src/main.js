import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import Ewebeditor from '@/pages/editor/index.vue';

import '@/assets/stylus/reset.styl';
import '@/assets/stylus/index.styl';
import 'element-ui/lib/theme-chalk/index.css';

import Layout from '@/layout/index.vue';


Vue.config.productionTip = false


Vue.component('layout', Layout);
Vue.component('editor', Ewebeditor);

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
