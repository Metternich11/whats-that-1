/* eslint-disable no-console */
export const logger = store => next => action => {
  console.log('--------------');
  //console.log('BEFORE DISPATCH', store.getState());
  console.log('ACTION', action);
  next(action);
  console.log('AFTER DISPATCH', store.getState());
  console.log('--------------');
}