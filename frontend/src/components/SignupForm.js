import React from 'react'

class SignupForm extends React.Component {




  displayModal = () => {
    if (this.props.showModal) {
      return (
        <div className="modal fade" id="modalSignupForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{opacity: 1, display: 'block'}}>
        <div></div>
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body mx-3">
                  <div className="md-form mb-5">
                      <i className="fa fa-user prefix grey-text"></i>
                      <input placeholder="Username" onChange={this.props.username} type="text" value={this.props.user} id="orangeForm-name" className="form-control validate" />
                  </div>

                    <div className="md-form mb-5">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input placeholder="Password" type="password" id="defaultForm-email" className="form-control validate" />
                    </div>



                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button onClick={this.props.signup} className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1">Login/Sign up</button>
                    <button className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1" onClick={this.props.modal}>Close</button>
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
          {this.props.loggedInStatus ? <a className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1 signup-btn" data-toggle="modal" data-target="#modalSignupForm" onClick={this.props.logout}>Logout</a> :
        <a className="btn btn-default btn-rounded #5e35b1 deep-purple darken-1 signup-btn" data-toggle="modal" data-target="#modalSignupForm" onClick={this.props.modal}>Login/ SignUp</a>}

        </div>
      </div>
    )
  }
}

export default SignupForm;
