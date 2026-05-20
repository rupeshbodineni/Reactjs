import React from 'react'
import Navbar from './Navbar/Navbar'
import Add from './Components/add'
import Edit from './Components/Edit'
import List from './Components/List'
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Add/>
      <Edit/>
      <List/>
      <Home/>
    </div>
  )
}

export default App