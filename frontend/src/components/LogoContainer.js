import React from 'react'
import LogoImg from '../logo.png'
import LoginForm from './LoginForm'

class Logo extends React.Component {
  render () {
    return (
      <div className="navbar navbar-dark #f3e5f5 purple lighten-5">
        <div className="title-div navbar-dark #f3e5f5 purple lighten-5">
          <img src={LogoImg} className="App-logo" alt="logo" />
          <h1>Moodiy Music</h1>
          <h5 className="sub-title">Tuneing your mood...</h5>
        </div>
      </div>
    )
  }
}

export default Logo;
