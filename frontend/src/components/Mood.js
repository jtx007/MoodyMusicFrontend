import React, { Component } from 'react';

const moods = ['Happy', 'Exuberant', 'Energetic', 'Down', 'Calm', 'Focus']

class Mood extends Component {
  render() {
    return (
      <div className="Mood">
        {moods.map(mood =>
          <button type="button" className="btn btn-outline-secondary waves-effect" key={mood}>{mood}</button>
        )}
      </div>
    )
  }
}

export default Mood;
