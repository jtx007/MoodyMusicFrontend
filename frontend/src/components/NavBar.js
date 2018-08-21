import React, { Component } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="btn home-btn btn-default btn-rounded deep-purple darken-1" data-target="">Home</div>
        <LoginForm />
        <SignupForm />
      </div>
    )
  }
}

export default NavBar;
