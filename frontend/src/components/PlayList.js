import React, { Component } from 'react';
import Song from './Song'

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <h3>This Playlist will tune your mood...</h3>
        <Song />
        <Song />
        <Song />
      </div>
    )
  }
}

export default Playlist;
