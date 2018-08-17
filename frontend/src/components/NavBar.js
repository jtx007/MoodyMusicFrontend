import React, { Component } from 'react';
import LoginForm from './LoginForm'


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark #f3e5f5 purple lighten-5">
        <a href="" className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1" data-target="">Home</a>
        <LoginForm />
      </nav>
    )
  }
}

export default NavBar;
