import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { CREATE_TODO, DELETE_TODO, MARK_TODO, TodoActionTypes, TodoState } from './types';

const initialState: TodoState = {
  todos: []
};

function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case CREATE_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case MARK_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.timestamp === action.payload.timestamp) {
            todo.completed = action.payload.completed;
          }

          return todo;
        })
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.timestamp !== action.payload.timestamp)
      };
    default:
      return state;
  }
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    todoReducer
  });
