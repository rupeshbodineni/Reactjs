import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Add from './Components/Add'
import Edit from './Components/Edit'
import List from './Components/List'
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [students, setStudents] = useState([])

  return (
    <div className='app-shell'>
      <Navbar totalStudents={students.length} />

      <main className='container my-4'>
        <section className='hero-banner rounded-4 p-4 p-md-5 mb-4 shadow-sm'>
          <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3'>
            <div>
              <h1 className='display-6 fw-bold'>Manage Student Records Easily</h1>
              <p className='lead text-light-opacity mb-0'>Add students, view the list, and see the total count update live on every screen size.</p>
            </div>
            <div>
              <div className='badge bg-white text-dark py-2 px-3 fs-6 shadow-sm'>
                Students: {students.length}
              </div>
            </div>
          </div>
        </section>

        <div className='row gy-4'>
          <div className='col-lg-4'>
            <Add setStudents={setStudents} />
          </div>
          <div className='col-lg-8'>
            <List students={students} />
          </div>
        </div>

        <div className='mt-4'>
          <Home />
        </div>
      </main>
    </div>
  )
}

export default App