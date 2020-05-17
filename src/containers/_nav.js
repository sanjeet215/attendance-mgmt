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
          _authentication: 'ROLE_MODERATOR'
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
              name: 'On-board Organization',
              to: '/base/navbars'
            }
          ]
        }
      ]
    }
  ]
