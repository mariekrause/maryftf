import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '../customComponents/Navbar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import standartButton from '../custumerComponents/standartButton'

const routerOptions = [
  {path: '/', component: 'Index'},
  {path: '/about', component: 'AboutMe'},
  {path: '/contact', component: 'Contact'},
  {path: '/contact2', component: 'Contact2'},
  {path: '/blog', component: 'Blog'},
  {path: '/portfolio', component: 'Portfolio'},
  {path: '*', component: 'NotFound'}
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.component('Navbar', Navbar)

// Vue.component('StandartButton', standartButton)

export default new Router({
  routes,
  mode: 'history'
})
