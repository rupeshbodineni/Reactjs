import Navbar from "./Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import ContactApp from "./contactapp/ContactApp";
let App = ()=>{

  return <div>
            <Router>
              <Navbar/>
              <Routes>
                  <Route path="/index" element={<Home/>}/>
                  <Route path="/contact" element={<ContactApp/>}/>
              </Routes>
            </Router>   
        </div>
}
export default App;