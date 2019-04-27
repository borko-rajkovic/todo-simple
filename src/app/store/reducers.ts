import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { Todo } from '../models/Todo';
import { CREATE_TODO, DELETE_TODO, MARK_TODO, TodoActionTypes } from './types';

const initialState: Todo[] = [];

export interface AppState {
  router: RouterState;
  todos: Todo[];
}

function todoReducer(state = initialState, action: TodoActionTypes): Todo[] {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case MARK_TODO:
      return state.map(todo => {
        if (todo.timestamp === action.payload.timestamp) {
          todo.completed = action.payload.completed;
        }

        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.timestamp !== action.payload.timestamp);
    default:
      return state;
  }
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    todos: todoReducer
  });
