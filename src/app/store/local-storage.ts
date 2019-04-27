import { AppState } from './reducers';

const localStorageItemName = 'todo-simple-state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageItemName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(localStorageItemName, serializedState);
  } catch {}
};
