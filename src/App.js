import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    
  <>
 <Router>
      <Navbar AboutText="About US" Home="sohail" />
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;


// style={{ backgroundImage: 'url(background.png)', backgroundSize: 'cover', backgroundPosition: 'center',ackgroundAttachment: 'fixed'  }}