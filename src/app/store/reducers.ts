import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { add, assoc, compose, map, max, pluck, prepend, propEq, reduce, reject, when } from 'ramda';
import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import { Todo } from '../models/Todo';
import { CREATE_TODO, DELETE_TODO, MARK_TODO, TodoActionTypes } from './types';

const initialState: Todo[] = [];

export interface AppState {
  router: RouterState;
  todos: {
    future: Todo[][];
    past: Todo[][];
    present: Todo[];
    history?: any;
  };
}

// these functions are called in order
const pluckIds = (state: Todo[]) => pluck('id', state);
const getMaxId = (ids: number[]) => reduce(max, -1, ids);
const addOne = (reducedValue: number) => add(reducedValue, 1);

// extract ids from todo list; get max id; increment by one
const getNewId = compose(
  addOne,
  getMaxId,
  pluckIds
);

const createTodo = (state: Todo[], text: string, timestamp: Date) =>
  prepend(
    {
      id: getNewId(state),
      completed: false,
      text,
      timestamp
    },
    state
  );

// change property 'completed' to given value for given id in todos
const markTodo = (value: boolean, id: number, todos: Todo[]) =>
  map(when(propEq('id', id), assoc('completed', value)), todos);

// return todos which don't have given id
const deleteTodo = (id: number, state: Todo[]) => reject(propEq('id', id), state);

export function todoReducer(state = initialState, action: TodoActionTypes): Todo[] {
  switch (action.type) {
    case CREATE_TODO:
      const { text } = action.payload;
      const timestamp = new Date();
      return createTodo(state, text, timestamp);
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
    todos: undoable(todoReducer)
  });
