import tk from 'timekeeper';

import { todoReducer } from './reducers';
import { CREATE_TODO, DELETE_TODO, MARK_TODO } from './types';

describe('todos reducers', () => {
  let time: Date;

  beforeEach(() => {
    time = new Date();
    tk.freeze(time);
  });

  afterEach(() => {
    tk.reset();
  });

  it('should handle CREATE_TODO', () => {
    const text = 'New TODO in empty state';
    const user = 'Borko';

    expect(
      todoReducer([], {
        type: CREATE_TODO,
        payload: {
          text,
          user
        }
      })
    ).toEqual([
      {
        text,
        user,
        completed: false,
        id: 0,
        timestamp: new Date()
      }
    ]);

    expect(
      todoReducer(
        [
          {
            text: 'One Todo already in state',
            completed: false,
            user: 'Admin',
            timestamp: new Date(),
            id: 0
          }
        ],
        {
          type: CREATE_TODO,
          payload: {
            text: 'New Todo in state that is not empty',
            user: 'Borko'
          }
        }
      )
    ).toEqual([
      {
        text: 'New Todo in state that is not empty',
        completed: false,
        user: 'Borko',
        timestamp: new Date(),
        id: 1
      },
      {
        text: 'One Todo already in state',
        completed: false,
        user: 'Admin',
        timestamp: new Date(),
        id: 0
      }
    ]);
  });

  it('should handle MARK_TODO', () => {
    const text = 'New TODO in empty state';
    const user = 'Borko';

    expect(
      todoReducer(
        [
          {
            text,
            user,
            completed: false,
            id: 0,
            timestamp: new Date()
          }
        ],
        {
          type: MARK_TODO,
          payload: {
            id: 0,
            completed: true
          }
        }
      )
    ).toEqual([
      {
        text,
        user,
        completed: true,
        id: 0,
        timestamp: new Date()
      }
    ]);
  });

  it('should handle DELETE_TODO', () => {
    const text = 'New TODO in empty state';
    const user = 'Borko';

    expect(
      todoReducer(
        [
          {
            text,
            user,
            completed: false,
            id: 0,
            timestamp: new Date()
          }
        ],
        {
          type: DELETE_TODO,
          payload: {
            id: 0
          }
        }
      )
    ).toEqual([]);
  });
});
