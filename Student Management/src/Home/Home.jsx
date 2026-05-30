import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='card p-4 p-md-5'>
      <div className='row align-items-center'>
        <div className='col-md-8'>
          <h2 className='fw-bold mb-3'>Student Management System</h2>
          <p className='text-muted mb-4'>A clean, responsive UI for adding student profiles and viewing the roster with fast access to totals and actions.</p>
          <div className='d-flex flex-wrap gap-3'>
            <Link to='/add' className='btn button-primary'>Add Student</Link>
            <Link to='/students' className='btn btn-outline-secondary'>View Students</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home