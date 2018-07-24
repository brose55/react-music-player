import React from 'react';

const Landing = () => (
      <div className="landing">
        <h1 className="hero-title">Turn the music up!</h1>

        <div className="selling-points">
          <div className ="point">
            <ion-icon name="musical-notes"></ion-icon>
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that some algorithm chose?</p>
          </div>
          <div className ="point">
            <ion-icon name="microphone"></ion-icon>
            <h2 className="point-title">Unlimited ad-free streaming</h2>
            <p className="point-description">No arbitrary limits. No distractions. Sing your heart out all night long!</p>
          </div>
          <div className ="point">
            <ion-icon name="headset"></ion-icon>
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>

        <footer>
        </footer>

      </div>
);


export default Landing;
