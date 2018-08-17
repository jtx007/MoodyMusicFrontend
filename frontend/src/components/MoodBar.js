import React, { Component } from 'react';
import Mood from "./Mood"

class MoodBar extends Component {
  render() {
    return (
      <div className="MoodBar">
        I am the Mood Bar Please select one mood:
        <Mood />
      </div>
    )
  }
}

export default MoodBar;
