import { combineReducers } from 'redux';
import pages from './pagesReducer';
import game from './gameReducer';

export default combineReducers({
  game,
  pages
});
