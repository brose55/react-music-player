import React, { Component } from 'react';

class Album extends Component {
  render() {
    return(
      <div className="album">
        {this.props.match.params.slug} album page will go here
      </div>
    )
  }
}

export default Album;
