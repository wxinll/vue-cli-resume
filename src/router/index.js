import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})


// const routes = [
//   { path: '/login', component: window.login},
//   { path: '/signup', component: window.signUp},
//   { path: '/share', component: window.share},
//   { path: '/skinpicker', component: window.skinPicker},
// ]

// const router = new VueRouter({
//   routes: routes,
// })
