import React, { Component } from 'react';
import GenresTypes from './GenresTypes'

class Genre extends Component {
  render() {
    return (
      <div className="Genre">
        {GenresTypes.map(genre =>
          <ul className="btn btn-outline-secondary waves-effect" key={genre}>{genre}</ul>
        )}
      </div>
    )
  }
}

export default Genre;
