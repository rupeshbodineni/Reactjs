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
    <div>
      <Navbar totalStudents={students.length} />
      <div className='container my-4'>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <Add setStudents={setStudents} />
          </div>
          <div className='col-md-8'>
            <List students={students} />
          </div>
        </div>
      </div>
      <Edit />
      <Home />
    </div>
  )
}

export default App