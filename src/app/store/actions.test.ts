import { createTodo, deleteTodo, markTodo } from './actions';
import { CREATE_TODO, DELETE_TODO, MARK_TODO } from './types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = {
      user: 'User',
      text: 'Some text'
    };

    const expectedAction = {
      type: CREATE_TODO,
      payload
    };

    expect(createTodo(payload)).toEqual(expectedAction);
  });

  it('should create an action to mark a todo', () => {
    const input = {
      id: 1,
      completed: true
    };

    const expectedAction = {
      type: MARK_TODO,
      payload: input
    };

    expect(markTodo(input)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const input = {
      id: 1
    };

    const expectedAction = {
      type: DELETE_TODO,
      payload: input
    };

    expect(deleteTodo(input)).toEqual(expectedAction);
  });
});
