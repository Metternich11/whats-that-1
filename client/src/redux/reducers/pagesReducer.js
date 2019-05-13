import * as ActionTypes from '../actions/pagesTypes';
import * as GameActionTypes from '../actions/gameTypes';
import socketReducer from './socketReducer';

const initialState = {
  join: {

  }
}

export default (state = initialState, action) => {
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
    case GameActionTypes.SOCKET_MESSAGE:
      return socketReducer(state, action);
    default:
    return state
  }
}