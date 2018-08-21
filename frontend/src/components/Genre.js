import React, { Component } from 'react';
import GenresTypes from './GenresTypes'
import GenresTypesBasic from './GenresTypesBasic'

class Genre extends Component {
  state = {
    showExtendedGenres: false
  }
  handleClick = e => {
    this.setState(prevState => {
      return {showExtendedGenres: !prevState.showExtendedGenres}
    });;
  }

  displayExtendedGenres = () => {
    if (this.state.showExtendedGenres) {
      return(
        <div className="extended-genres">
          {GenresTypes.map(genre =>
            <ul onClick={this.handleClick} className="btn btn-outline-secondary rounded waves-effect" key={genre}>{genre}</ul>
          )}
        </div>
    )}
  }

  render() {
    return (
      <div>
        <div className="Genre">
          <h3 className="app-text">Create playlist by Genre</h3>
          <div>
            <div>
              <button url="#" onClick={this.handleClick} className="genres-btn btn btn-rounded btn-mdb-color btn-lg">Extended Genres</button>
            </div>
            {GenresTypesBasic.map(genre =>
              <ul onClick={this.props.button} className="btn btn-outline-secondary rounded waves-effect" key={genre}>{genre}</ul>
            )}
          </div>
        </div>
        {this.displayExtendedGenres()}
      </div>
    )
  }
}

export default Genre;
