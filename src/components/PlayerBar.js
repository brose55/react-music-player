import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <div className="player-bar">
        <div id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <ion-icon name="skip-backward"></ion-icon>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            {
              this.props.isPlaying ?
              <ion-icon name="pause"></ion-icon> :
              <ion-icon name="play"></ion-icon>
            }
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <ion-icon name="skip-forward"></ion-icon>
          </button>
        </div>
        <div id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </div>
        <div id="volume-control">
          <ion-icon name="volume-low"></ion-icon>
          <input type="range" className="seek-bar" value="80" />
          <ion-icon name="volume-high"></ion-icon>
        </div>
      </div>
    )
  }
}

export default PlayerBar;
