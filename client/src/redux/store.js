import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

export const createRedux = () => {
  const store = createStore(reducer, applyMiddleware());

  return store;
};
