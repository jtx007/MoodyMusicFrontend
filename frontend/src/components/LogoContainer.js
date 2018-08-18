import React from 'react'
import LogoImg from '../logo.png'
import LoginForm from './LoginForm'

class Logo extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-dark #f3e5f5 purple lighten-5">
        <a className="navbar-brand">
          <div className="title-div">
            <h1>Moodiy Music</h1>
            <h5>Tuneing your mood...</h5>
          </div>
          <img src={LogoImg} className="App-logo" alt="logo" />
        </a>
      </nav>
    )
  }
}

export default Logo;
