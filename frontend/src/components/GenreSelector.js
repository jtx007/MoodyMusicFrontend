import React, { Component } from 'react';
import Genre from './Genre'

class GenreSelector extends Component {
  render() {
    return (
      <div>
        <h2>Select one or more genres from the list:</h2>
        <Genre />
        <Genre />
        <Genre />
        <Genre />
        <Genre />
      </div>
    )
  }
}

export default GenreSelector;
