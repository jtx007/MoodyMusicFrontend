import React from 'react'
import LogoContainer from './LogoContainer'
import NavBar from './NavBar'
import MoodBar from './MoodBar'
import GenreSelector from './GenreSelector'
import PlayList from './PlayList'
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
          <h3>Please select one or more genres of your choice</h3>
          <GenreSelector />
        </div>
        <div className="plalist-container">
          <h3>This is playlistr will Toone your mood...</h3>
          <PlayList />
        </div>
        <div className="player-console">
          <PlayerConsole />
        </div>

      </div>
    )
  }
}

export default AppContainer;
