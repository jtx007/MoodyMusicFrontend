import React, { Component } from 'react';
import MoodTypes from './MoodTypes'

class Mood extends Component {
  render() {
    return (
      <div>
        <div className="mood-title">
          <h3 className="app-text">Create a Playlsit by Mood</h3>
        </div>
        <div className="Mood">
          {MoodTypes.map(mood =>
            <button onClick={this.props.button} className="btn btn-outline-secondary rounded waves-effect" key={mood}>{mood}</button>
          )}
        </div>
      </div>
    )
  }
}

export default Mood;
