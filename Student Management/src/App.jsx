import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Add from './Components/Add'
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
  { id: 20, name: 'Tara Wilson', email: 'tara.wilson@example.com' },
  { id: 21, name: 'Uma Patel', email: 'uma.patel@example.com' },
  { id: 22, name: 'Victor Hughes', email: 'victor.hughes@example.com' },
  { id: 23, name: 'Wendy Park', email: 'wendy.park@example.com' },
  { id: 24, name: 'Xavier Brooks', email: 'xavier.brooks@example.com' },
  { id: 25, name: 'Yara Medina', email: 'yara.medina@example.com' },
  { id: 26, name: 'Zoe Ellis', email: 'zoe.ellis@example.com' },
  { id: 27, name: 'Aaron Wallace', email: 'aaron.wallace@example.com' },
  { id: 28, name: 'Bella Morgan', email: 'bella.morgan@example.com' },
  { id: 29, name: 'Carter Brooks', email: 'carter.brooks@example.com' },
  { id: 30, name: 'Diana Fox', email: 'diana.fox@example.com' },
  { id: 31, name: 'Ethan Marshall', email: 'ethan.marshall@example.com' },
  { id: 32, name: 'Fiona Baker', email: 'fiona.baker@example.com' },
  { id: 33, name: 'Gabriel Flores', email: 'gabriel.flores@example.com' },
  { id: 34, name: 'Heather Scott', email: 'heather.scott@example.com' },
  { id: 35, name: 'Isaac Bennett', email: 'isaac.bennett@example.com' },
  { id: 36, name: 'Jade Nguyen', email: 'jade.nguyen@example.com' },
  { id: 37, name: 'Kyle Turner', email: 'kyle.turner@example.com' }
]

const App = () => {
  const [students, setStudents] = useState(initialStudents)

  return (
    <div className='app-shell'>
      <Navbar totalStudents={students.length} />

      <main className='container py-5'>
        <section className='hero-banner mb-5'>
          <div className='hero-content'>
            <div>
              <h1>Modern student management made simple</h1>
              <p>Keep student records organized with a clean dashboard, fast add flow, and responsive list view.</p>
            </div>
            <div className='hero-stats'>
              <div className='hero-card'>
                <span>Total active students</span>
                <strong>{students.length}</strong>
              </div>
              <div className='hero-card'>
                <span>Fresh new design</span>
                <strong>Dashboard-style UI</strong>
              </div>
            </div>
          </div>
        </section>

        <section className='content-section'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add setStudents={setStudents} />} />
            <Route path='/students' element={<List students={students} />} />
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App