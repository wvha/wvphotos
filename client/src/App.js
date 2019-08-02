import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Photos from "./components/photos/Photos"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Photos} />


        </Router>

        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
