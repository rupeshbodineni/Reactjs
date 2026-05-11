import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ContactApp from "./ContactApp/ContactApp";
import ContactList from "./ContactApp/ContactList";

let App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/contact" element={<ContactApp />} />
          <Route path="/contactlist" element={<ContactList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;