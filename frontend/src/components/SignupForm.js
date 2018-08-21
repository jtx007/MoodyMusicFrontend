import React from 'react'

class SignupForm extends React.Component {
  state = {
    showModal: false,
    username: '',
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

  handleSignUp = e => {
    let username = this.state.username
    fetch('http://localhost:3000/api/v1/users', {
      "method": "POST",
      "body": JSON.stringify({username: username}),
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    })
  }

  displayModal = () => {
    if (this.state.showModal) {
      return (
        <div className="modal fade" id="modalSignupForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{opacity: 1, display: 'block'}}>
        <div></div>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="md-form mb-5">
                      <i className="fa fa-user prefix grey-text"></i>
                      <input placeholder="Create Username" onChange={this.handleUsername} type="text" value={this.state.username} id="orangeForm-name" className="form-control validate" />
                  </div>

                    <div className="md-form mb-5">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input placeholder="Create Password" type="password" id="defaultForm-email" className="form-control validate" />
                    </div>



                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button onClick={this.handleSignUp} className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1">Sign up</button>
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
          <a className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1 signup-btn" data-toggle="modal" data-target="#modalSignupForm" onClick={this.handleClick}>Sign Up</a>
        </div>
      </div>
    )
  }
}

export default SignupForm;
