import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";
import { logger } from './middlewares/logger';
import { api } from './middlewares/api';
import { socket } from './middlewares/sockets';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createRedux = () => {
  const store = createStore(
    reducer,
    applyMiddleware(api, socket, logger))
  return store;
};
