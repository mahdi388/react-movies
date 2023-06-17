import React, { Component } from 'react';
import './styles/main.scss'
import welcomeImage from './images/welcome.jpg'
import Home from './components/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  return (
    <>
      <nav className='nav-bar'>
        <ul>
          <li onClick={()=>navigate('/')}>
            <div></div>
            Home
            <div></div>
          </li>
          <li>
            <div></div>
            Movies
            <div></div>
          </li>
          <li>
            <div></div>
            About us
            <div></div>
          </li>
        </ul>
        <img src={welcomeImage} alt="welcome" />
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App;