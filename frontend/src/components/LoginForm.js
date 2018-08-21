import React from 'react'

class LoginForm extends React.Component {
  state = {
    showModal: false,
    username: 'username',
    password: ''
  }

  handleClick = e => {
    this.setState(prevState => {
        return {showModal: !prevState.showModal}
    })
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }


  displayModal = () => {
    if (this.state.showModal) {
      return (
      <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{opacity: 1, display: 'block'}}>
        <div></div>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                    <div className="md-form mb-5">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input placeholder="username" onChange={this.handleUsername} type="email"  value={this.state.username} id="defaultForm-email" className="form-control validate" />
                    </div>

                    <div className="md-form mb-4">
                        <i className="fa fa-lock prefix grey-text"></i>
                        <input placeholder="password" onChange={this.handlePassword} value={this.state.password} type="password" id="defaultForm-pass" className="form-control validate" />
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1">Login</button>
                    <button className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1" onClick={this.handleClick}>Close</button>
                </div>
            </div>
        </div>
      </div>)
    }
  }


  render () {
    return (
      <div>
        {this.displayModal()}
        <div className="text-center">
          <a className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1 login-btn" data-toggle="modal" data-target="#modalLoginForm" onClick={this.handleClick}>Login</a>
        </div>
      </div>
    )
  }
}

export default LoginForm;
