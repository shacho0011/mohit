import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
