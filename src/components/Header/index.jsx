import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = React.memo(() => {
  return (
    <header className="site-header">
      <div className="container">
        <h2 className="logo">React Buổi 2</h2>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
})

export default Header
