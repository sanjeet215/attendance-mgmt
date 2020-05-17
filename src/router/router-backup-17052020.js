import Vue from 'vue'
import Router from 'vue-router'
import { Role } from '../_helper/role'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Custom components
const Addressform = () => import('@/components/Addressform')
const Organizationform = () => import('@/components/Organizationform')
const Adduserform = () => import('@/components/Adduserform')


// Applicaiton views
const Organization = () => import('@/views/organization/Organization')
const Login = () => import('@/views/login/Login')


Vue.use(Router)

export const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {

  const loggedIn = localStorage.getItem('user');

  if(!loggedIn){
    console.log('User is not logged in');
    return [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/login',
        name: 'Home',
        component: TheContainer,
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { authorize: [Role.ROLE_MODERATOR] }
          },
          {
            path: 'base',
            redirect: '/base/cards',
            name: 'Base',
            component: {
              render(c) { return c('router-view') }
            },
            children: [
              {
                path: 'addressform',
                name: 'Addressform',
                component: Addressform
              },
              {
                path: 'organization',
                name: 'Organization',
                component: Organization
              },
              {
                path: 'addorganization',
                name: 'Organizationform',
                component: Organizationform
              },
              {
                path: 'adduserform',
                name: 'Adduserform',
                component: Adduserform
              }
            ]
          }
        ]
      }
    ]
  } else {
    console.log('user is logged in');
    return [
      {
        path: '/login',
        component: Login
      },
      {
        path: '/',
        redirect: '/login',
        name: 'Home',
        component: TheContainer,
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { authorize: [Role.ROLE_MODERATOR] }
          },
          {
            path: 'base',
            redirect: '/base/cards',
            name: 'Base',
            component: {
              render(c) { return c('router-view') }
            },
            children: [
              {
                path: 'addressform',
                name: 'Addressform',
                component: Addressform
              },
              {
                path: 'adduserform',
                name: 'Adduserform',
                component: Adduserform
              }
            ]
          }
        ]
      }
    ]
  }
}