import React, { Component } from 'react';
import Song from './Song'

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        I am a Playlist with these songs:
        <Song />
        <Song />
        <Song />
      </div>
    )
  }
}

export default Playlist;
