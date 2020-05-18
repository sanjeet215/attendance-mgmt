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


/* Function to get local storage data. 
   now local store is implemented later it can be implemented via web-service*/

function getUser() {
  const loggedIn = localStorage.getItem('user');
  console.log('Data from current storage');

  if (loggedIn !== null) {
    console.log('User is loggedin');
    console.log('Determined Role -->' + getRole(loggedIn));
    return true;
  } else {
    console.log('No data in storage');
    return false;
  }
}

/* Function to get the role if multiple roles are assigned*/
function getRole(loggedIn) {
  const roles = JSON.parse(loggedIn).roles;
  let finalRole = "";
  let role_string = "";

  for (var i = 0; i < roles.length; i++) {
    role_string = role_string + roles[i];
  }

  if (role_string.includes(Role.ROLE_ADMIN)) {
    finalRole = Role.ROLE_ADMIN;
  } else if (role_string.includes(Role.ROLE_MODERATOR)) {
    finalRole = Role.ROLE_MODERATOR;
  } else {
    finalRole = Role.ROLE_USER;
  }

  return finalRole;
}

// function isAuthenticated() {

// }

function configRoutes() {

  //const loggedIn = localStorage.getItem('user');
  const loggedIn = getUser();

  //const loggedIn = false;

  if (!loggedIn) {
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
            auth_role: ['ROLE_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER']
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
            component: Dashboard
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