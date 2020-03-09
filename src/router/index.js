import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '../customComponents/Navbar'
// import standartButton from '../custumerComponents/standartButton'

const routerOptions = [
  {path: '/', component: 'Index'},
  {path: '/about', component: 'AboutMe'}
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)
Vue.component('Navbar', Navbar)
// Vue.component('StandartButton', standartButton)

export default new Router({
  routes,
  mode: 'history'
})
