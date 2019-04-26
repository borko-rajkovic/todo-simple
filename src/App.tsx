import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="menu">
            <ul>
              <li>
                {' '}
                <Link to="/">Home</Link>{' '}
              </li>
              <li>
                {' '}
                <Link to="/about">About</Link>{' '}
              </li>
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
