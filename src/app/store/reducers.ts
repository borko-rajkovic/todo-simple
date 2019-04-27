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

export function todoReducer(state = initialState, action: TodoActionTypes): Todo[] {
  switch (action.type) {
    case CREATE_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text,
          timestamp: new Date(),
          user: action.payload.user
        },
        ...state
      ];
    case MARK_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }

        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    todos: todoReducer
  });
