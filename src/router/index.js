import Vue from 'vue'
import Router from 'vue-router'
// import standartButton from '../custumerComponents/standartButton'

const routerOptions = [
  {path: '/', component: 'Index'},
  {path: '/hello', component: 'HelloWorld'}
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)
// Vue.component('StandartButton', standartButton)

export default new Router({
  routes,
  mode: 'history'
})
