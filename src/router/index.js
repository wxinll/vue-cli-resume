import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import SharePage from '@/components/SharePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/login',
		name: 'Login',
		component: Login
    },
    {
		path: '/signUp',
		name: 'SignUp',
		component: SignUp
    },
    {
		path: '/sharePage',
		name: 'SharePage',
		component: SharePage
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
