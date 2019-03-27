import Vue from 'vue';
import Layout from './layout/layout.vue';
import router from './routes.js';
import store from './store';
import './common/reset.less';

//开启错误提示
Vue.config.debug = true;

// 开发环境使用mockjs
process.env.NODE_ENV === 'development' && require('../mock.js')

new Vue({
  router,
  store,
  el: '#root',
  render: h => h(Layout)
});