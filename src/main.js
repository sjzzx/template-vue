// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/netwock'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import flexible from './utils/flexible.min' //适配

import * as filters from './utils/filters';
//将导出的每个方法挂载原型
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
