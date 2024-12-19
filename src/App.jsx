import Sidebar from './components/Sidebar'

function App() {
  const menuStructure = [
    {
      label: 'Dashboard',
    },
    {
      label: 'Settings',
      children: [
        {
          label: 'Profile Settings',
        },
        {
          label: 'Account Settings',
          children: [{ label: 'Privacy' }, { label: 'Notifications' }],
        },
      ],
    },
    {
      label: 'Reports',
      children: [
        {
          label: 'Sales',
        },
        {
          label: 'Revenue',
          children: [{ label: 'Monthly' }, { label: 'Yearly' }],
        },
      ],
    },
  ]

  return (
    <div>
      <Sidebar menuItems={menuStructure} />
    </div>
  )
}

export default App
