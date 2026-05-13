import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return <h1>Home Component</h1>
}

const App = () => {
  return (
    <div>

      <Router>

        <Navbar/>

        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/contact' element={<ContactApp/>}/>

        </Routes>

      </Router>

    </div>
  )
}

export default App