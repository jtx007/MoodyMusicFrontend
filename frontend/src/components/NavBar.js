import React, { Component } from 'react';
import SignupForm from './SignupForm'
import Dropdown from './Dropdown'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="btn home-btn btn-default btn-rounded deep-purple darken-1" data-target="">Home</div>
        <Dropdown />
        <SignupForm loggedInStatus={this.props.loggedIn} user={this.props.user} showModal={this.props.modalShow}  modal={this.props.modal} username={this.props.username} logout={this.props.logout} signup={this.props.signup}/>

      </div>
    )
  }
}

export default NavBar;
