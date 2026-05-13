import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>

        <Link to='/' className='navbar-brand'>
          Logo
        </Link>

        <div className='ms-auto'>
          <ul className='navbar-nav d-flex flex-row gap-3'>

            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar