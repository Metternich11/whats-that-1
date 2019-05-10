const { createStore } = require('redux');
const { reducer } = require('./reducers');

exports.createRedux = () => {
  const store = createStore(reducer);
  return store;
};
