import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';


class PlayerConsole extends Component {

  render() {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 450,
    };
    const view = 'coverart'; // or 'coverart'
    const theme = 'black'; // or 'white'
    console.log(this.props.playlist)
    return (
      <div>
        <div className="console-title">
          <h3 className="app-text">This Playlist will tune your mood...</h3>
        </div>
        <div className="PlayerConsole border border-secondary rounded">
          <SpotifyPlayer

            uri={"spotify:user:spotify:playlist:" + this.props.playlist}
            size={size}
            view={view}
            theme={theme}
            />
        </div>
      </div>
    )
  }
}

export default PlayerConsole;
