import { Todo } from '../models/Todo';
import { CREATE_TODO, DELETE_TODO, MARK_TODO } from './types';

export function createTodo(newTodo: Todo) {
  return {
    type: CREATE_TODO,
    payload: newTodo
  };
}

export function markTodo(id: number, completed: boolean) {
  return {
    type: MARK_TODO,
    meta: {
      id,
      completed
    }
  };
}

export function deleteTodo(id: number) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
}
