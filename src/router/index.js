import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard'
import Details from '../views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      props:true
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      props:true

    },
    
    

  ]
})
