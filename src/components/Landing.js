import React from 'react';

const Landing = () => (
      <div className="landing">
        <h1 className="hero-title">Turn the music up!</h1>

        <div className="selling-points">
          <div className ="point">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that some algorithm chose?</p>
          </div>
          <div className ="point">
            <h2 className="point-title">Unlimited ad-free streaming</h2>
            <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <div className ="point">
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>

        <footer>
          <div id="freepik">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </footer>

      </div>
);


export default Landing;
