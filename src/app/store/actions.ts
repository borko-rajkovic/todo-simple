import { Todo } from '../models/Todo';
import { CREATE_TODO, DELETE_TODO, MARK_TODO } from './types';

export function createTodo(newTodo: Todo) {
  return {
    type: CREATE_TODO,
    payload: newTodo
  };
}

export function markTodo(timestamp: Date, completed: boolean) {
  return {
    type: MARK_TODO,
    meta: {
      timestamp,
      completed
    }
  };
}

export function deleteTodo(timestamp: Date) {
  return {
    type: DELETE_TODO,
    payload: {
      timestamp
    }
  };
}
