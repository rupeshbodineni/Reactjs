import React from 'react'
import Navbar from './assets/Navbar/Navbar'
import ContactApp from './Components/ContactApp'
import ContactDeatils from './Components/ContactDeatils'
import ContactsList from './Components/ContactsList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
        <ContactApp/>
        <ContactDeatils/>
        <ContactsList/>
    </div>
  )
}

export default App