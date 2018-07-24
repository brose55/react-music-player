import React, { Component } from 'react';
import albumData from './../data/albums';
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
        isPlaying: false
    }

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
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

  render() {
    const { album } = this.state;

    return (
      <div className="album">
        <div id="album-info">
          <img id="album-cover-art" src={album.albumCover} alt=
          '' />
          <div className="album-details">
            <h1 id="album-title">{album.title}</h1>
            <h2 className="artist">{album.artist}</h2>
            <div id="release-info">{album.releaseInfo}</div>
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
              album.songs.map( (song, i) =>
                <tr className="song" key={album.title + song + i} onClick={() => this.handleSongClick(song)}>

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
      </div>
    )
  }
}

export default Album;
