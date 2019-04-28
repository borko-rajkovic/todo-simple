import { Location } from 'history';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Routes } from '../../App';
import TabsComponent from '../components/TabsComponent';
import AddTodo from '../components/Todo/AddTodo';
import TodoList from '../components/Todo/TodoList';
import { Todo } from '../models/Todo';
import { AppState } from '../store/reducers';

interface IProps {
  location: Location;
  todos: Todo[];
}

export class ListTodos extends Component<IProps> {
  public render() {
    return (
      <div>
        <TabsComponent route={this.props.location.pathname as Routes} />
        <AddTodo />
        <TodoList items={this.props.todos} />
      </div>
    );
  }
}

const getVisibleTodos = (todos: Todo[], ownProps: { location: Location }): Todo[] => {
  const path = ownProps.location.pathname;

  switch (path) {
    case Routes.completed:
      return todos.filter(todo => todo.completed === true);
    case Routes.uncompleted:
      return todos.filter(todo => todo.completed === false);
    case Routes.all:
    default:
      return todos;
  }
};

const mapStateToProps = (state: AppState, ownProps: { location: Location }) => {
  return {
    todos: getVisibleTodos(state.todos.present, ownProps)
  };
};

export default connect(
  mapStateToProps,
  null
)(ListTodos);
