import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import '../style/Album.css';

// Todo add play and pause ionicons
// look up their guide

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => album.slug === this.props.match.params.slug);

    this.state = {
        album: album,
        currentSong: album.songs[0],
        currentTime: 0,
        duration: album.songs[0].duration,
        volume: false,
        isPlaying: false
    }

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = this.state.volume;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    }

    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('duration', this.eventListeners.duration);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause()
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(currentIndex + 1, this.state.album.songs.length - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  formatTime(time) {
    return time ? `${Math.floor(time / 60)}:${Number(time % 60 / 100).toFixed(2).substr(2,3)}` : '-:--';
  }

  render() {
    const { albumCover, title, artist, releaseInfo, songs } = this.state.album;

    return (
      <div className="album">
        <div id="album-info">
          <img id="album-cover-art" src={albumCover} alt=
          '' />
          <div className="album-details">
            <h1 id="album-title">{title}</h1>
            <h2 className="artist">{artist}</h2>
            <div id="release-info">{releaseInfo}</div>
          </div>
        </div>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {
              songs.map( (song, i) =>
                <tr className="song" key={title + song + i} onClick={() => this.handleSongClick(song)}>

                  <td className="song-actions">
                    <button>
                      <span>{i + 1}</span>
                      <ion-icon name="play"></ion-icon>
                      <ion-icon name="pause"></ion-icon>
                    </button>
                  </td>
                  <td>{song.title}</td>
                  <td>{song.duration}</td>
                </tr>)
            }
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.state.currentTime}
          duration={this.audioElement.duration}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick = {() => this.handlePrevClick()}
          handleNextClick = {() => this.handleNextClick()}
          handleTimeChange = {(e) => this.handleTimeChange(e)}
          handleVolumeChange = {(e) => this.handleVolumeChange(e)}
          formatTime = {(time) => this.formatTime(time)}
        />
      </div>
    )
  }
}

export default Album;
