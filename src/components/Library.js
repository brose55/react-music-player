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
      <div className="library">
      {
        albums.map( (album, i) =>
				<Link to={`/album/${album.slug}`} key={album.title + i}>
					<img className="album-thumbnail" src={album.albumCover} alt={album.title} />
					<div className="album-description">
						<p>{album.artist} -</p>
						<p>{album.title}</p>
						<p>{album.songs.length} songs</p>
					</div>
				</Link>
        )
      }
      </div>
    );
  }
}

export default Library;
