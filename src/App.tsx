import './App.css';

import React, { Component } from 'react';
import { NavLink, Redirect, Route, Router, Switch } from 'react-router-dom';

import { history } from './app/store/configure-store';
import About from './components/About';
import Home from './components/Home';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="menu">
            <ul>
              <li>
                {' '}
                <NavLink to="/" activeStyle={{ color: 'red' }} exact={true}>
                  All
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/about" activeStyle={{ color: 'red' }} exact={true}>
                  Uncompleted
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/about2" activeStyle={{ color: 'red' }} exact={true}>
                  Completed
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/about2" activeStyle={{ color: 'red' }} exact={true}>
                  Make new
                </NavLink>{' '}
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
      </Router>
    );
  }
}

export default App;
