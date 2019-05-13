import * as ActionTypes from '../actions/pagesTypes';
import * as GameActionTypes from '../actions/gameTypes';
import socketReducer from './socketReducer';

export default (state = {}, action) => {
  console.log('Here goes the action PR:', action) //eslint-disable-line
  switch (action.type) {
    case ActionTypes.GET_KEY_SUCCESS:
    return {
      ...state,
      create: {
        gameKey: action.data.key,
        loading: false
      }
    };
    case ActionTypes.GET_KEY_FAILURE:
    return {
      ...state,
      create: {
        loading: false
      }
    };
    case ActionTypes.GET_KEY_LOADING:
    return {
      ...state,
      create: {
        loading: true
      }
    };
    // case ActionTypes.GAME_DOES_NOT_EXIST: 
    // return {
    //   ...state,
    //   join: {
    //     ...state.join,
    //     error: "Game does not exist!"
    //   }
    // }
    case GameActionTypes.SOCKET_MESSAGE:
      return socketReducer(state, action);
    default:
    return state
  }
}