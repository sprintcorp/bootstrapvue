import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/pages/home/home.vue';
import ProductDetails from './components/pages/view/view.vue';
import Contact from './components/pages/contact/contact.vue';
import Shop from './components/pages/shop/shop.vue';
import Login from './components/authentication/login/login.vue';
import Register from './components/authentication/registration/register.vue'

Vue.use(VueRouter);
const routes = [
    {path:'/', component:Home,name:'home'},
    {path:'/product/details/:id', component:ProductDetails, name:'view'},
    {path:'/shop', component:Shop, name:'shop'},
    {path:'/contact', component:Contact, name:'contact'},
    {path:'/login', component:Login, name:'login'},
    {path:'/register', component:Register, name:'register'},
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