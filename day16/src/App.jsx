import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import CourseList from './Components/CourseList'
import AddCourse from './Components/AddCourse'

import image from './assets/Amazon.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

let App = () => {
  return (

    <BrowserRouter>

      <Navbar logo={image} />

      <Routes>

        <Route path="/home" element={<Dashboard />} />

        <Route path="/courses" element={<CourseList />} />

        <Route path="/profile" element={<AddCourse />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App