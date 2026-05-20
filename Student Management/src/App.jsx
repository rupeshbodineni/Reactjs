import React from 'react'
import Navbar from './Navbar/Navbar'
import Add from './Components/add'
import Edit from './Components/Edit'
import List from './Components/List'

const App = () => {
  return (
    <div>
      <Add/>
      <Edit/>
      <List/>
    </div>
  )
}

export default App