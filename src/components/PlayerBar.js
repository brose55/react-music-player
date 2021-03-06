import React, { Component } from 'react';
import '../style/PlayerBar.css';

class PlayerBar extends Component {	
  render() {
    return (
      <div className="pb">
        <div id="time-control" className="stack">
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
					<div className="under">
						<div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
						<div className="total-time">{this.props.formatTime(this.props.duration)}</div>
					</div>
        </div>
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
        <div id="volume-control" className="stack">
          <input
            type="range"
            className="seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
					<div className="under">
						<ion-icon name="volume-low"></ion-icon>
						<ion-icon name="volume-high"></ion-icon>
					</div>
        </div>
      </div>
    )
  }
}

export default PlayerBar;
