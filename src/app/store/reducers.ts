import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { assoc, curry, map, propEq, reject, when } from 'ramda';
import { combineReducers } from 'redux';

import { Todo } from '../models/Todo';
import { CREATE_TODO, DELETE_TODO, MARK_TODO, TodoActionTypes } from './types';

const initialState: Todo[] = [];

export interface AppState {
  router: RouterState;
  todos: Todo[];
}

// change property 'completed' to given value for given id in todos
const markTodo = curry((value, id, todos) => map(when(propEq('id', id), assoc('completed', value)), todos));

// return todos which don't have given id
const deleteTodo = (id: number, state: Todo[]) => reject(propEq('id', id), state);

export function todoReducer(state = initialState, action: TodoActionTypes): Todo[] {
  switch (action.type) {
    case CREATE_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text,
          timestamp: new Date()
        },
        ...state
      ];
    case MARK_TODO:
      const { completed, id } = action.payload;
      return markTodo(completed, id, state);
    case DELETE_TODO:
      return deleteTodo(action.payload.id, state);
    default:
      return state;
  }
}

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    todos: todoReducer
  });
