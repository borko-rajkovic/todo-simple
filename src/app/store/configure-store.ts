import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadState, saveState } from './local-storage';
import createRootReducer, { AppState } from './reducers';

export const history = createBrowserHistory();

export default function configureStore() {
  const middlewares: Middleware[] = [routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedState = loadState();

  const store = createStore(createRootReducer(history), persistedState, composedEnhancers);

  store.subscribe(() => {
    saveState(store.getState() as AppState);
  });

  return store;
}
