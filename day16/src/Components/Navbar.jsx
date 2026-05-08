import React from 'react'
import { Link } from 'react-router-dom'

let Navbar = (props) => {
    return (
        <nav className='Navbar Navbar-dark Navbar-expand-lg '>
            <img src={props.logo} alt="Amazon Logo" width="100" />

            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar