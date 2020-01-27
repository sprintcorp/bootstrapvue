import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/pages/home/home.vue';
import AboutUs from './components/pages/about-us/about-us.vue';
import Contact from './components/pages/contact/contact.vue';
import Shop from './components/pages/shop/shop.vue';

Vue.use(VueRouter);
const routes = [
    {path:'/', component:Home,name:'home'},
    {path:'/about-us', component:AboutUs, name:'about-us'},
    {path:'/shop', component:Shop, name:'shop'},
    {path:'/contact', component:Contact, name:'contact'},
];

export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});