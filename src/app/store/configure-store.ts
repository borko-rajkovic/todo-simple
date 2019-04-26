import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todoReducer } from './reducers';

export default function configureStore() {
  const middlewares: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(todoReducer, composedEnhancers);

  return store;
}
