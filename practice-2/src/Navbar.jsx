import React from "react";

let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        {/* Brand */}
        <a className="navbar-brand" href="/index">Logo</a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/index">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/careers">Careers</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;