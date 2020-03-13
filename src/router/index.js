import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '../customComponents/Navbar'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import standartButton from '../custumerComponents/standartButton'

const routerOptions = [
  {path: '/', component: 'Index'},
  {path: '/about', component: 'AboutMe'},
  {path: '/*', component: 'NotFound'}
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.component('Navbar', Navbar)

// Vue.component('StandartButton', standartButton)

export default new Router({
  routes,
  mode: 'history'
})
