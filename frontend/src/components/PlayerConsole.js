import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';


class PlayerConsole extends Component {

  render() {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 300,
    };
    const view = 'coverart'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
      <div className="PlayerConsole border border-secondary rounded">

        <SpotifyPlayer
          uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
          size={size}
          view={view}
          theme={theme}
          />
      </div>
    )
  }
}

export default PlayerConsole;
