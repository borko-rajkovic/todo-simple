import { Todo } from '../models/Todo';

export interface TodoState {
  todos: Todo[];
}

export const CREATE_TODO = 'CREATE_TODO';
export const MARK_TODO = 'MARK_TODO';
export const DELETE_TODO = 'DELETE_TODO';

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

interface MarkTodoAction {
  type: typeof MARK_TODO;
  payload: {
    id: number;
    completed: boolean;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

export type TodoActionTypes = CreateTodoAction | MarkTodoAction | DeleteTodoAction;
