import React from 'react'

class SignupForm extends React.Component {
  state = {
    showModal: false
  }

  handleClick = e => {
    this.setState(prevState => {
        return {showModal: !prevState.showModal}
    })
  }

  displayModal = () => {
    if (this.state.showModal) {
      return (
        <div className="modal fade" id="modalSignupForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{opacity: 1, display: 'block'}}>
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
                  <div class="md-form mb-5">
                      <i class="fa fa-user prefix grey-text"></i>
                      <input type="text" id="orangeForm-name" class="form-control validate" />
                      <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
                  </div>

                    <div className="md-form mb-5">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input type="email" id="defaultForm-email" className="form-control validate" />
                        <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
                    </div>

                    <div className="md-form mb-4">
                        <i className="fa fa-lock prefix grey-text"></i>
                        <input type="password" id="defaultForm-pass" className="form-control validate" />
                        <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
                    </div>

                    <div className="md-form mb-4">
                        <i className="fa fa-lock prefix grey-text"></i>
                        <input type="password" id="defaultForm-pass" className="form-control validate" />
                        <label data-error="wrong" data-success="right" for="defaultForm-pass">Confirm your password</label>
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1">Sign up</button>
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
