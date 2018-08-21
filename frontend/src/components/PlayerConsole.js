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
    return (
      <div>
        <div className="console-title">
        </div>
        <div className="PlayerConsole btn-outline-secondary rounded">
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
