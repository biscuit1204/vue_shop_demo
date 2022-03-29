import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop_Login from '../components/Shop_Login.vue' 

Vue.use(VueRouter)

const routes = [
  { path : '/login' , component : Shop_Login }
]

const router = new VueRouter({
  routes
})

export default router
