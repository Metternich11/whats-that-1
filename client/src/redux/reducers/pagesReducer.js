import * as ActionTypes from '../actions/pagesTypes';
import * as GameActionTypes from '../actions/gameTypes';
// import socketReducer from './socketReducer';

const initialState = {
  join: {}
};

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
      switch (action.payload.type) {
        case ActionTypes.FAILURE:
          return {
            ...state,
            join: {
              error: 'Game does not exist'
            }
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
