import './App.css';

import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavLink, Redirect, Route, Router, Switch } from 'react-router-dom';

import ListTodos from './app/pages/ListTodos';
import MakeNewTodo from './app/pages/MakeNewTodo';
import configureStore, { history } from './app/store/configure-store';
import logo from './logo.svg';

const store = configureStore();

export enum Routes {
  all = '/all',
  uncompleted = '/uncompleted',
  completed = '/completed',
  makeNew = '/make-new'
}

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
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
                    <NavLink to={Routes.all} activeStyle={{ color: 'red' }} exact={true}>
                      All
                    </NavLink>{' '}
                  </li>
                  <li>
                    {' '}
                    <NavLink to={Routes.uncompleted} activeStyle={{ color: 'red' }} exact={true}>
                      Uncompleted
                    </NavLink>{' '}
                  </li>
                  <li>
                    {' '}
                    <NavLink to={Routes.completed} activeStyle={{ color: 'red' }} exact={true}>
                      Completed
                    </NavLink>{' '}
                  </li>
                  <li>
                    {' '}
                    <NavLink to={Routes.makeNew} activeStyle={{ color: 'red' }} exact={true}>
                      Make new
                    </NavLink>{' '}
                  </li>
                </ul>
              </div>
              <div className="App-content">
                <Switch>
                  <Route path={Routes.all} component={ListTodos} />
                  <Route path={Routes.completed} component={ListTodos} />
                  <Route path={Routes.uncompleted} component={ListTodos} />
                  <Route path={Routes.makeNew} component={MakeNewTodo} />
                  <Redirect to={Routes.all} />
                </Switch>
              </div>
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
