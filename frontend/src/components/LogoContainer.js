import React from 'react'
import LogoImg from '../logo.png'
import LoginForm from './LoginForm'

class Logo extends React.Component {
  render () {
    return (
      <header className="App-header">
        <img src={LogoImg} className="App-logo" alt="logo" />
        <div className='Title-div'>
          <h1 className="App-title">Moody Music</h1>
          <h3 className="App-subtitle">Tuneing your mood!!!</h3>
        </div>
        <LoginForm />
      </header>
    )
  }
}

export default Logo;
