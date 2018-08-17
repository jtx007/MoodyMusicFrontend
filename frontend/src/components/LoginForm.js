import React from 'react'

class LoginForm extends React.Component {
  render () {
    return (
      <div class="container">
          <form name="login">
            Username<input type="text" name="userid"/>
            Password<input type="password" name="pswrd"/>
            <input type="button" onclick="check(this.form)" value="Login"/>
            <input type="reset" value="Cancel"/>
          </form>
      </div>
    )
  }
}

export default LoginForm;
