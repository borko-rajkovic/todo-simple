import { Location } from 'history';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Routes } from '../../App';
import { AppState } from '../store/reducers';

interface IProps {
  location: Location;
}

export class ListTodos extends Component<IProps> {
  public render() {
    return this.chooseListType();
  }

  private chooseListType() {
    const path = this.props.location.pathname;

    switch (path) {
      case Routes.completed:
        return <div>Completed</div>;
      case Routes.uncompleted:
        return <div>Uncompleted</div>;
      case Routes.all:
      default:
        return <div>All</div>;
    }
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    allTodos: state.todos,
    completedTodos: state.todos.filter(todo => todo.completed === true),
    uncompletedTodos: state.todos.filter(todo => todo.completed === false)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos);
