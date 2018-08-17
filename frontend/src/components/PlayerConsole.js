import React, { Component } from 'react';

class PlayerConsole extends Component {
  render() {
    return (
      <div className="PlayerConsole">
        <h2>I am the Player Console:</h2>
        <button> Play </button>
        <button> Stop </button>
        <button> Pause </button>
        <button> Next </button>
        <button> Previous </button>

      </div>
    )
  }
}

export default PlayerConsole;
