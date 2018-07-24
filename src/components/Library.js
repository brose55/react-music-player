import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../style/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData
    };
  }


  render() {
    const { albums } = this.state;
    return (
      <div className="Library">
      {
        albums.map( (album, i) =>
          <Link to={`/album/${album.slug}`} key={album.title + i}>
            <img className="album-cover" src={album.albumCover} alt={album.title} />
            <div>{album.title}</div>
            <div>{album.artist}</div>
            <div>{album.songs.length} songs</div>
          </Link>
        )
      }
      </div>
    );
  }
}

export default Library;
