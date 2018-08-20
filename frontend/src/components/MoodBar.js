import React, { Component } from 'react';
import Mood from "./Mood"

class MoodBar extends Component {
  render() {
    return (
      <div className="MoodBar nav-tabs">
        <h3>Create a Playlsit by Mood</h3>
        <Mood />
      </div>
    )
  }
}

export default MoodBar;
