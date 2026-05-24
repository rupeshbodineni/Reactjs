import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Add from './Components/Add'
import Edit from './Components/Edit'
import List from './Components/List'
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialStudents = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 2, name: 'Benjamin Lee', email: 'benjamin.lee@example.com' },
  { id: 3, name: 'Chloe Patel', email: 'chloe.patel@example.com' },
  { id: 4, name: 'Daniel Kim', email: 'daniel.kim@example.com' },
  { id: 5, name: 'Emma García', email: 'emma.garcia@example.com' },
  { id: 6, name: 'Fatima Noor', email: 'fatima.noor@example.com' },
  { id: 7, name: 'George Brown', email: 'george.brown@example.com' },
  { id: 8, name: 'Hannah Davis', email: 'hannah.davis@example.com' },
  { id: 9, name: 'Ian Murphy', email: 'ian.murphy@example.com' },
  { id: 10, name: 'Jasmine Singh', email: 'jasmine.singh@example.com' },
  { id: 11, name: 'Kevin Adams', email: 'kevin.adams@example.com' },
  { id: 12, name: 'Laura Chen', email: 'laura.chen@example.com' },
  { id: 13, name: 'Mia Torres', email: 'mia.torres@example.com' },
  { id: 14, name: 'Noah Carter', email: 'noah.carter@example.com' },
  { id: 15, name: 'Olivia Reed', email: 'olivia.reed@example.com' },
  { id: 16, name: 'Patrick O’Connor', email: 'patrick.oconnor@example.com' },
  { id: 17, name: 'Quinn Roberts', email: 'quinn.roberts@example.com' },
  { id: 18, name: 'Riya Sharma', email: 'riya.sharma@example.com' },
  { id: 19, name: 'Samuel White', email: 'samuel.white@example.com' },
  { id: 20, name: 'Tara Wilson', email: 'tara.wilson@example.com' }
]

const App = () => {
  const [students, setStudents] = useState(initialStudents)

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