import React from 'react'

const Navbar = () => {
  const totalStudents = 0

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      
      <div className='container'>

        <a className='navbar-brand' href="/">
          <img 
            src="https://via.placeholder.com/40" 
            alt="logo"
            width="40"
            height="40"
            className='me-2'
          />
          StudentApp
        </a>

        <ul className='navbar-nav ms-auto align-items-center'>

          <li className='nav-item'>
            <a className='nav-link' href="/">
              Home
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href="/">
              Services
            </a>
          </li>

          <li className='nav-item'>
            <a className='nav-link' href="/">
              Add Student
            </a>
          </li>

          <li className='nav-item'>
            <span className='nav-link text-white'>
              Total Students:
              <span className='badge bg-secondary ms-2'>{totalStudents}</span>
            </span>
          </li>
        </ul>

      </div>

    </nav>
  )
}

export default Navbar