import React, { Component } from 'react';
import Mood from "./Mood"

class MoodBar extends Component {
  render() {
    return (
      <div className="MoodBar">
        <Mood />
      </div>
    )
  }
}

export default MoodBar;
