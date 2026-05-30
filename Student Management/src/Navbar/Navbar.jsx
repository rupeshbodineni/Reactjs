import React from 'react'

const Navbar = ({ totalStudents }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-custom sticky-top'>
      <div className='container-fluid px-4 px-lg-5'>
        <a className='navbar-brand d-flex align-items-center gap-3' href='/'>
          <div className='brand-icon d-flex align-items-center justify-content-center'>
            S
          </div>
          <div>
            <div className='brand-title'>StudentApp</div>
            <div className='brand-tag'>Track students with clarity</div>
          </div>
        </a>

        <button className='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center'>
            <li className='nav-item'>
              <a className='nav-link px-3' href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link px-3' href='/'>Students</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link px-3' href='/'>Add</a>
            </li>
          </ul>

          <div className='ms-lg-4 mt-3 mt-lg-0'>
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