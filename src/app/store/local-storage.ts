import { AppState } from './reducers';

const localStorageItemName = 'todo-simple-state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageItemName);

    if (serializedState === null) {
      return undefined;
    }
    const toReturn = JSON.parse(serializedState);
    delete toReturn.router;
    return toReturn;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState) => {
  try {
    delete state.todos.history;
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageItemName, serializedState);
  } catch {}
};
