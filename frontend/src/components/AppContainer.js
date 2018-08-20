import React from 'react'
import LogoContainer from './LogoContainer'
import NavBar from './NavBar'
import Mood from "./Mood"
import Genre from './Genre'
import PlayerConsole from './PlayerConsole'

class AppContainer extends React.Component {
  render () {
    return (
      <div className="wrapper">

        <div className="logo-container">
          <LogoContainer />
          <NavBar />
        </div>

        <div className="Mood-bar">
          <Mood />
        </div>

        <div className="genre-bar">
          <Genre />
        </div>

        <div className="player-console">
          <PlayerConsole />
        </div>

      </div>
    )
  }
}

export default AppContainer;
