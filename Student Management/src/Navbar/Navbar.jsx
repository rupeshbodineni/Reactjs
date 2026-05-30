import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ totalStudents }) => {
  return (
    <nav className='navbar navbar-custom sticky-top'>
      <div className='container-fluid px-4 px-lg-5 d-flex flex-wrap align-items-center justify-content-between gap-3'>
        <NavLink className='navbar-brand d-flex align-items-center gap-3' to='/'>
          <div className='brand-icon d-flex align-items-center justify-content-center'>
            S
          </div>
          <div>
            <div className='brand-title'>StudentApp</div>
            <div className='brand-tag'>Track students with clarity</div>
          </div>
        </NavLink>

        <div className='d-flex align-items-center flex-wrap gap-3'>
          <ul className='navbar-nav d-flex flex-row flex-wrap gap-2 mb-0'>
            <li className='nav-item'>
              <NavLink to='/' className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/students' className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}>
                Students
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/add' className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`}>
                Add
              </NavLink>
            </li>
          </ul>

          <div className='ms-2'>
            <span className='badge rounded-pill bg-primary text-white shadow-sm'>
              Total Students: {totalStudents}
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar