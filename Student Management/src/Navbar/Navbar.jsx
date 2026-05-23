import React from 'react'

const Navbar = ({ totalStudents }) => {
  return (
    <nav className='navbar navbar-dark bg-dark shadow-sm'>
      <div className='container-fluid px-3 px-lg-5'>
        <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 py-3'>
          <a className='navbar-brand d-flex align-items-center gap-2 mb-2 mb-lg-0' href="/">
            <img 
              src="https://via.placeholder.com/40" 
              alt="logo"
              width="40"
              height="40"
              className='rounded-circle'
            />
            <span>StudentApp</span>
          </a>

          <div className='d-flex flex-column flex-md-row align-items-center gap-3 w-100 justify-content-between'>
            <ul className='navbar-nav d-flex flex-row flex-wrap gap-2 mb-0'>
              <li className='nav-item'>
                <a className='nav-link text-white px-2' href="/">Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white px-2' href="/">Services</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white px-2' href="/">Add Student</a>
              </li>
            </ul>

            <div className='navbar-text text-white'>
              <span className='d-inline-flex align-items-center gap-2'>
                Total Students:
                <span className='badge bg-secondary'>{totalStudents}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar