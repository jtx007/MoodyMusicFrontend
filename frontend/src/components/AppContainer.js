import React from 'react'
import LogoContainer from './LogoContainer'
import NavBar from './NavBar'
import Mood from "./Mood"
import Genre from './Genre'
import PlayerConsole from './PlayerConsole'
import WebcamCapture from './WebcamCapture'


class AppContainer extends React.Component {

  state = {
    current_playlist: '37i9dQZF1DXcBWIGoYBM5M'
  }

  handleButton = (event) => {
    let term = event.target.innerHTML.split(' ')[1]
    console.log(term);
    fetch('http://localhost:3000/api/v1/terms', {
      "method": "POST",
      "body": JSON.stringify({word: term}),
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    }).then(resp => resp.json())
    .then(json => {
      this.setState({
        current_playlist: json.data.attributes.player
      })
    })


  }

  handleButton2 = (event) => {
    let term = event.target.innerHTML
    fetch('http://localhost:3000/api/v1/terms', {
      "method": "POST",
      "body": JSON.stringify({word: term}),
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    }).then(resp => resp.json())
    .then(json => {
      this.setState({
        current_playlist: json.data.attributes.player
      })
    })
  }

  handleImage = (event) => {
    let selfie = this.capture
    fetch('https://api-face.sightcorp.com/api/detect/fb6027a3e3d4439794f9bd52abb77f30', {
      "method": "POST",
      "body": JSON.stringify({img: selfie}),
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    }).then(resp => resp.json())
    .then(console.log)
  }

  render () {
    console.log(this.state.current_playlist)
    return (
      <div className="wrapper">

        <div className="logo-container">
          <LogoContainer />
          <NavBar />
        </div>

        <div className="Mood-bar">
          <Mood button={this.handleButton}/>
        </div>

        <div className="genre-bar">
          <Genre button={this.handleButton2}/>
        </div>

        <div className="webcam-capture">
          <WebcamCapture image={this.capture}/>
        </div>

        <div className="player-console">
          <PlayerConsole playlist={this.state.current_playlist}/>
        </div>

      </div>
    )
  }
}

export default AppContainer;
