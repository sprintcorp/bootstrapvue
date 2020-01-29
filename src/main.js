import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import BootstrapVue from 'bootstrap-vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { LayoutPlugin,ModalPlugin,CardPlugin,VBScrollspyPlugin,TablePlugin } from 'bootstrap-vue';


Vue.use(BootstrapVue,LayoutPlugin,ModalPlugin,CardPlugin,VBScrollspyPlugin,TablePlugin);
Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
