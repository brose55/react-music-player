import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './style/App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import logo from './style/heart-beat.png'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="app-header">
					<Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
	        <h1 className="hero-title">React Jams! Choose your own music!</h1>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to="/library">Library</Link>
          </nav>
        </header>
        <main className="centered">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>

      </div>
    );
  }
}

export default App;
