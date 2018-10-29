import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueTypedJs);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
