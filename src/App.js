//

import React, { Component } from 'react';
// import logo from './logo.svg';
// import '../styles/main.css';
import './styles/main.css'
import Hero from './components/Header.js';
import Results from "./components/Results.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hero />
      <Results />
      </div>
    );
  }
}

export default App;
