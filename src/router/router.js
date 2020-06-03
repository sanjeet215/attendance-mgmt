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
const ViewOrgDetails = () => import('@/components/ViewOrgDetails')


const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

const Employees = () => import('@/views/employees/Employees')
const Employee = () => import('@/views/employees/Employee')

const MyOrganization = () => import('@/views/myorganization/MyOrganization')
const MyDepartment = () => import('@/views/department/MyDepartment')


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
          path: 'myorganization',
          name: 'MyOrganization',
          component: MyOrganization
        },
        {
          path: 'mydepartment',
          name: 'MyDepartment',
          component: MyDepartment
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
            },
            {
              path: 'employees',
              meta: {
                label: 'Employees'
              },
              component: {
                render(c) {
                  return c('router-view')
                }
              },
              children: [
                {
                  path: '',
                  name: 'Employees',
                  component: Employees
                },
                {
                  path: ':id',
                  meta: {
                    label: 'Employee Details'
                  },
                  name: 'Employee',
                  component: Employee
                }
              ]
            },
            {
              path: 'users',
              meta: {
                label: 'Users'
              },
              component: {
                render(c) {
                  return c('router-view')
                }
              },
              children: [
                {
                  path: '',
                  name: 'Users',
                  component: Users
                },
                {
                  path: ':id',
                  meta: {
                    label: 'User Details'
                  },
                  name: 'User',
                  component: User
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });