import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product.module';
Vue.use(Vuex);
const  modules = {
    products:product
};
export default new Vuex.Store({
   modules
})