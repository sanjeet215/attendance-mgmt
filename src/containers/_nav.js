export default
  [
    {
      _name: 'CSidebarNav',
      _children: [
        {
          _name: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cil-speedometer',
          _authentication: 'ROLE_USER'
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Manage Organization',
          route: '/base',
          icon: 'cil-People',
          _authentication: 'ROLE_USER',
          items: [
            {
              name: 'Address',
              to: '/base/addressform'
            },
            {
              name: 'New Organization',
              to: '/base/addorganization'
            },
            {
              name: 'View Organization',
              to: '/base/vieworganization'
            },
            {
              name: 'Organization Details',
              to: '/base/vieworganization/:id'
            },
            {
              name: 'Users',
              to:'/base/users'
            }
          ]
        }
      ]
    }
  ]
