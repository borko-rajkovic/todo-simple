import './App.css';

import React, { Component } from 'react';
import { NavLink, Redirect, Route, Router, Switch } from 'react-router-dom';

import AllTodos from './app/pages/AllTodos';
import CompletedTodos from './app/pages/CompletedTodos';
import MakeNewTodo from './app/pages/MakeNewTodo';
import UncompletedTodos from './app/pages/UncompletedTodos';
import { history } from './app/store/configure-store';
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
                <NavLink to="/all" activeStyle={{ color: 'red' }} exact={true}>
                  All
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/uncompleted" activeStyle={{ color: 'red' }} exact={true}>
                  Uncompleted
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/completed" activeStyle={{ color: 'red' }} exact={true}>
                  Completed
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/make-new" activeStyle={{ color: 'red' }} exact={true}>
                  Make new
                </NavLink>{' '}
              </li>
            </ul>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={AllTodos} />
              <Route path="/all" component={AllTodos} />
              <Route path="/uncompleted" component={UncompletedTodos} />
              <Route path="/completed" component={CompletedTodos} />
              <Route path="/make-new" component={MakeNewTodo} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
