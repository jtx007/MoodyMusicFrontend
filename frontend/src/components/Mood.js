import React, { Component } from 'react';
import MoodTypes from './MoodTypes'

class Mood extends Component {
  render() {
    return (
      <div className="Mood">
        {MoodTypes.map(mood =>
          <button className="btn btn-outline-secondary rounded waves-effect" key={mood}>{mood}</button>
        )}
      </div>
    )
  }
}

export default Mood;
