import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Landing.css';

const Landing = () => (
      <div className="landing">

        <div className="selling-points">
					<Link to="/library" className="point-icon"><ion-icon name="musical-notes"></ion-icon></Link>
          <div className ="point">
            <h2 className="point-title">Choose your music</h2>
            <p className="point-description">The world is full of music.</p>
						<p className="point-description">Why should you have to listen to music that some algorithm chose?</p>
          </div>
					<Link to="/library" className="point-icon"><ion-icon name="microphone"></ion-icon></Link>
          <div className ="point">
            <h2 className="point-title">Unlimitted ad-free streaming</h2>
            <p className="point-description"><b>No</b> arbitrary limits.</p>
						<p className="point-description"><b>No</b> distractions.</p>
						<p className="point-description">Sing your heart out all night long!</p>
          </div>
					<Link to="/library" className="point-icon"><ion-icon name="headset"></ion-icon></Link>
          <div className ="point">
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go.</p>
						<p className="point-description">This streaming service is available on all mobile platforms!</p>
          </div>
        </div>

        <footer>
        </footer>

      </div>
);


export default Landing;
