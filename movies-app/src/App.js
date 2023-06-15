import React, { Component } from 'react';
import './styles/main.scss'
import welcomeImage from './images/welcome.jpg'

class App extends Component {
  render() {
    return (
      <>
        <nav className='nav-bar'>
          <ul>
            <li>
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
      </>
    );
  }
}

export default App;