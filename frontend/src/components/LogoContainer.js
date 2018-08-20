import React from 'react'
import LogoImg from '../logo.png'
import LoginForm from './LoginForm'

class Logo extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-dark #f3e5f5 purple lighten-5">
        <a>
          <div className="title-div">
            <img src={LogoImg} className="App-logo" alt="logo" />
            <h1>Moodiy Music</h1>
            <h5>Tuneing your mood...</h5>
          </div>
        </a>
      </nav>
    )
  }
}

export default Logo;
