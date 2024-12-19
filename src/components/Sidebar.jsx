/* eslint-disable react/prop-types */
import { useState } from 'react'

const Sidebar = ({ menuItems }) => {
  const [expandedItems, setExpandedItems] = useState({})


  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  

  const renderMenu = (items, level = 0, parentKey = '') => {
    return (
      <ul
        style={{
          paddingLeft: `${level * 20}px`,
          listStyleType: 'none',
          margin: 0,
        }}
      >
        {items.map((item, index) => {
          const key = parentKey ? `${parentKey}-${index}` : `${index}`
          const isExpanded = expandedItems[key]
          const hasChildren = item.children && item.children.length > 0

          return (
            <li key={key} style={{ margin: '5px 0' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#34495e',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '4px',
                  cursor: hasChildren ? 'pointer' : 'default',
                }}
                onClick={() => hasChildren && toggleExpand(key)}
              >
                <span>{hasChildren ? item.label : item.label}</span>
                {hasChildren && (
                  <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
                    {isExpanded ? '-' : '+'}
                  </span>
                )}
              </div>
              {hasChildren &&
                isExpanded &&
              
                renderMenu(item.children, level + 1, key)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div
      style={{
        width: '300px',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '10px',
        height: '100vh',
        overflowY: 'auto',
        transition: 'width 0.3s ease',
      }}
    >
      {renderMenu(menuItems)}
    </div>
  )
}

export default Sidebar
