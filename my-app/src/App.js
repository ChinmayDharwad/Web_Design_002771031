import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
import Nav from './Nav/Nav';
import Footer from './footer/footer.js'

import About from './pages/About';
import Jobs from './pages/Jobs';
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
    <Router>
      {/* {isLoggedIn && <Nav />} */}
      <Nav/>
      <Routes>
      <Route path='/login' element={<LoginPage handle= {handleLogin}/>}></Route>
        <Route path='/' element={<LoginPage handle= {handleLogin}/>}></Route>
        {isLoggedIn &&
          <>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          </>
         }
      </Routes>
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
