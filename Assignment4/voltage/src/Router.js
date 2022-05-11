import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/Home"
import AboutPage from "@/views/AboutUs"
import ProductPage from "@/views/Product"
import ManufacturingPage from "@/views/Manufacturing"
import ContactUs from "@/views/ContactUs"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/product', component: ProductPage },
    { path: '/manufacturing', component: ManufacturingPage },
    { path: '/contact', component: ContactUs },
    
  ]
});

export default router;