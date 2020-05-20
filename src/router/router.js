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
const Vieworganization = () => import('@/components/ViewOrganization')

Vue.use(Router)

export const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
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
              component: Addressform,
              meta: { authorize: [] }
            },
            {
              path: 'organization',
              name: 'Organization',
              component: Organization,
              meta: { authorize: [Role.ROLE_MODERATOR] }
            },
            {
              path: 'vieworganization',
              name: 'Vieworganization',
              component: Vieworganization
            },
            {
              path: 'addorganization',
              name: 'Organizationform',
              component: Organizationform,
              meta: { authorize: [Role.ROLE_USER] }
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


// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/logint'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   const role = JSON.parse(loggedIn).roles[0];

//   console.log(role);


//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const { authorize } = to.meta;
//   //const currentUser = authenticationService.currentUserValue;
//   const loggedIn = localStorage.getItem('user');
//   let currentUser = 'ROLE_ANONYMOUS';

// console.log('test'+ loggedIn)

//   if (loggedIn) {
//     currentUser = JSON.parse(loggedIn).roles[0];
//     console.log("current role "+currentUser)
//   }

  // if (authorize) {
  //   if (currentUser === Role.ROLE_USER) {
  //     // not logged in so redirect to login page with the return url
  //     console.log('Came to this condition');
  //     return next({ path: "/dashboard", query: { returnUrl: to.path } });
  //   }

  //   if (currentUser === Role.ROLE_MODERATOR) {
  //     // not logged in so redirect to login page with the return url
  //     console.log('This condition worked 2nd');

  //     return next({ path: "/dashboard" });
  //   }

  //   // check if route is restricted by role
  //   if (authorize.length && !authorize.includes(currentUser.role)) {
  //     // role not authorised so redirect to home page
  //     return next({ path: "/" });
  //   }
  // }

  //next();
// });