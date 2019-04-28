import './App.css';

import { Paper } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import AppBarComponent from './app/components/AppBarComponent';
import About from './app/pages/About';
import ListTodos from './app/pages/ListTodos';
import configureStore, { history } from './app/store/configure-store';

const store = configureStore();

export enum Routes {
  all = '/all',
  uncompleted = '/uncompleted',
  completed = '/completed',
  about = '/about'
}

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            <Paper elevation={0} style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}>
              <AppBarComponent history={history} />
              <Switch>
                <Route path={Routes.all} component={ListTodos} />
                <Route path={Routes.completed} component={ListTodos} />
                <Route path={Routes.uncompleted} component={ListTodos} />
                <Route path={Routes.about} component={About} />
                <Redirect to={Routes.all} />
              </Switch>
            </Paper>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
