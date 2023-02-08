import './styles/App.css';
import './styles/Navbar.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Home.css';
import './styles/Form.css';
import './styles/Login.css';
import './styles/MediaQueries.css';

import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Form from './components/Form.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';


// import { useState } from 'react';

function App() {
  // const [currentForm, setCurrentForm] = useState('Login')
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<><Header /><Home/></>} />
          <Route path='/Form' element={<Form />} />
          <Route path='/SignUp' element={<SignUp />} />
          
          
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
