import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers';
import { logger } from './middlewares/logger';
import { api } from './middlewares/api';
import { socket } from './middlewares/sockets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [api, socket];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const createRedux = () => {
  const store = createStore(reducer, enhancer);
  return store;
};
