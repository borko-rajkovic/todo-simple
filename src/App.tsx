import './App.css';

import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavLink, Redirect, Route, Router, Switch } from 'react-router-dom';

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
              <AppBar color="primary" position="static" style={{ height: 64 }}>
                <Toolbar style={{ height: 64 }}>
                  <Typography variant="h5" color="inherit">
                    Simple React Todo App
                  </Typography>
                </Toolbar>
                {/* <Tabs variant="fullWidth" value={0}>
                  <LinkTab label="Page One" href="page1" />
                  <LinkTab label="Page Two" href="page2" />
                  <LinkTab label="Page Three" href="page3" />
                </Tabs> */}
              </AppBar>
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
                  <li>
                    {' '}
                    <NavLink to={Routes.about} activeStyle={{ color: 'red' }} exact={true}>
                      About
                    </NavLink>{' '}
                  </li>
                </ul>
              </div>
              <div className="App-content" />
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
