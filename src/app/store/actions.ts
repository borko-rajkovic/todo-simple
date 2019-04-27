import { CREATE_TODO, DELETE_TODO, MARK_TODO } from './types';

export function createTodo(payload: { text: string }) {
  return {
    type: CREATE_TODO,
    payload
  };
}

export function markTodo(payload: { id: number; completed: boolean }) {
  return {
    type: MARK_TODO,
    payload
  };
}

export function deleteTodo(payload: { id: number }) {
  return {
    type: DELETE_TODO,
    payload
  };
}
