import { CREATE_TODO, DELETE_TODO, MARK_TODO, TodoActionTypes, TodoState } from './types';

const initialState: TodoState = {
  todos: []
};

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case CREATE_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case MARK_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }

          return todo;
        })
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}
