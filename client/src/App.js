import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/login';
import Register from './components/register';
import Users from './components/users';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </header>
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/users" component={Users} />
          </div>
        </div>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      //   <div>
      //     <Login />
      //   </div>
      // </div>
    );
  }
}

export default App;
