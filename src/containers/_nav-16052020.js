export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Manage Organization',
        route: '/base',
        icon: 'cil-People',
        items: [
          {
            name: 'Address',
            to: '/base/addressform',
          },
          {
            name: 'On-board Organization',
            to: '/base/navbars',
          }
        ]
      }

    ]
  }
]