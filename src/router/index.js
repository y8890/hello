import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import ManagementLayout from '../components/Layout/ManagementLayout.vue'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
import login from '../views/login.vue'
import Resume from '../views/Resume.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/',
      // name: 'Home',
      component: ManagementLayout,
      children:[
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/PageA',
          name: 'PageA',
          component: PageA
        },
        {
          path: '/PageB',
          name: 'PageB',
          component: PageB
        },
        {
          path: '/Resume',
          name: 'Resume',
          component: Resume
        },
          // {
          //   path: '/ManagementLayout',
          //   // name: 'ManagementLayout',
          //   component: ManagementLayout
          // },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})

router.beforeEach((to, from, next) => {
  const shifoudenglu = localStorage.getItem('shifoudenglu')
  const dontNeedLoginPageNames =['login']
  if(shifoudenglu !== 'shi' && !dontNeedLoginPageNames.includes(to.name)){
    next({
      name:'login',
    })
  }else {
    next()
  }
})

export default router
