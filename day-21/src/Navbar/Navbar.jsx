import React from 'react'

const Sidebar = () => {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "250px",
          height: "100vh"
        }}
      >
        <h3 className="mb-4">My App</h3>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              About
            </a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Services
            </a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <h1>Welcome</h1>
        <p>Main content goes here.</p>
      </div>

    </div>
  )
}

export default Sidebar


