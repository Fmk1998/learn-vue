import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 数据请求
import axios from 'axios'
// 引入
import ElementUI from 'element-ui';
// 样式表
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 挂载全局请求函数方法
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
