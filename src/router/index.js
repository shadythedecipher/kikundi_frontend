import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import OtpView from '../views/OtpView.vue'
import HomeView from '../views/HomeView.vue'
import NewPasswordView from '../views/NewPasswordView.vue'
import SettingsView from '../views/SettingsView.vue'
import GroupsView from '../views/GroupsView.vue'
import GroupDetailsView from '../views/GroupDetailsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/groupdetails',
      name: 'groupdetails',
      component: GroupDetailsView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegistrationView
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: ForgotPasswordView
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      // beforeEnter: (to, from, next) => {
      //   if (!localStorage.getItem('authenticated')) {
      //     return next({
      //       name: 'login'
      //     })
      //   }
      //   next()
      // }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      // beforeEnter: (to, from, next) => {
      //   if (!localStorage.getItem('authenticated')) {
      //     return next({
      //       name: 'login'
      //     })
      //   }
      //   next()
      // }
    },
    {
      path: '/otp',
      name: 'otp',
      component: OtpView
    },
    {
      path: '/new_password',
      name: 'new_password',
      component: NewPasswordView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]

})


export default router
