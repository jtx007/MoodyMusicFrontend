import React from 'react'
import LogoContainer from './LogoContainer'
import NavBar from './NavBar'
import MoodBar from './MoodBar'
import GenreBar from './GenreBar'
import PlayerConsole from './PlayerConsole'

class AppContainer extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <div className="logo-container">
          <LogoContainer />
        </div>
        <div className="Nav-bar">
          <NavBar />
        </div>
        <div className="Mood-bar">
          <MoodBar />
        </div>
        <div className="genre-selector">
          <GenreBar />
        </div>
        <div className="player-console">
          <PlayerConsole />
        </div>

      </div>
    )
  }
}

export default AppContainer;
