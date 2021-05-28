import Vue from 'vue'
import VueRouter from 'vue-router'
import Modify from '../views/Modify.vue'
import Search from '../views/Search.vue'
import Info from '../views/Info.vue'
import C_adduser from '../views/C_adduser.vue'
import B_adduser from '../views/B_adduser.vue'
import Login from '../components/Login.vue'
import Admin from '../App2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path:"modify",
        name:"Modify",
        component: Modify,
      },
      {
        path: 'search',
        name: 'Search',
        component: Search,
      },
      {
        path: 'info',
        name: 'Info',
        component: Info,
      },
      {
        //continued user add
        path: 'c_adduser',
        name: 'C_adduser',
        component: C_adduser,
      },
      {
        //batch user add
        path: 'b_adduser',
        name: 'B_adduser',
        component: B_adduser,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,routes
})

export default router
