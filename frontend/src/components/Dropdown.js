import React, { Component } from 'react'

export default class Dropdown extends Component {

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Your Playlists</button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="1">Action</a>
        <a className="dropdown-item" href="2">Another action</a>
        <a className="dropdown-item" href="3">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="4">Separated link</a>
        </div>
      </div>

    )

  }
}
