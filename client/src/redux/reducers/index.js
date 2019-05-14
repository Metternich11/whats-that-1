import { combineReducers } from 'redux';
import game from './gameReducer';
import pages from './pagesReducer';
import currentUser from './currentUserReducer';

export default combineReducers({
  pages,
  game,
  currentUser
});
