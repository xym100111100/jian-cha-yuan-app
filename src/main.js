import "babel-polyfill";//es6转es5兼容IE
import "url-search-params-polyfill";//让ie兼容new URLSearchParams()
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';


Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
