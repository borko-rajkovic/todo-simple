import './App.css';

import { Paper } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavLink, Redirect, Route, Router, Switch } from 'react-router-dom';

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

// function LinkTab(props: { label: string; href: string }) {
//   return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
// }

// const MyLink = (props: { to: string }) => <NavLink {...props} />;

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
            <div className="App">
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
                </ul>
              </div>
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
