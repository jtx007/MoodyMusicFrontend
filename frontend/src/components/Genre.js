import React, { Component } from 'react';
import GenresTypes from './GenresTypes'
import GenresTypesBasic from './GenresTypesBasic'

class Genre extends Component {
  render() {
    return (
      <div className="Genre">
        <h3>Please select one or more genres of your choice</h3>
        <p>Basic Genres</p>
        <div>
          {GenresTypesBasic.map(genre =>
            <ul className="btn btn-rounded rounded btn-mdb-color" key={genre}>{genre}</ul>
          )}
        </div>
        <p>Extended Genres</p>
        <div>
          {GenresTypes.map(genre =>
            <ul className="btn btn-rounded rounded btn-mdb-color" key={genre}>{genre}</ul>
          )}
        </div>
      </div>
    )
  }
}

export default Genre;
