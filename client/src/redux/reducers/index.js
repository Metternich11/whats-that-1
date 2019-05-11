import * as ActionTypes from '../actions/types';
import * as SocketTypes from '../actions/socketTypes';

const initialState = {
  gameKey: undefined,
  loading: false
};

export default (state = initialState, action) => {
  console.log('Here goes the ', action) //eslint-disable-line
  switch (action.type) {
    case ActionTypes.GET_KEY:
    return {
      ...state
    };
    case ActionTypes.GET_KEY_SUCCESS:
    return {
      ...state,
      gameKey: action.data.key,
      loading: false
    };
    case ActionTypes.GET_KEY_FAILURE:
    return {
      ...state,
      loading: false
    };
    case ActionTypes.GET_KEY_LOADING:
    return {
      ...state,
      loading: true
    };
    case ActionTypes.PLAYER_INFO:
    return {
      ...state,
      playerName: action.playerName,
      gameKey: action.gameKey
    };
    case ActionTypes.USER_AVATAR:
    return {
      ...state,
      userAvatar: action.avatar
    };
    case ActionTypes.CREATOR_START_GAME:
    return {
      ...state,
    };
    case ActionTypes.SOCKET_MESSAGE:
      switch(action.payload.type) {
        case SocketTypes.GAME_CREATED: 
        return {
          ...state,
          message: action.payload.payload
        };
        case SocketTypes.JOINED: 
        return {
          ...state,
          message: action.payload.payload
        };
        case SocketTypes.START_GAME:
        return {
          ...state
        };
        case SocketTypes.START_ROUND:
        return {
          ...state
        };
        case SocketTypes.GUESS:
        return {
          ...state
        };
        case SocketTypes.VICTORY:
        return {
          ...state
        };
        case SocketTypes.ROUND_OVER:
        return {
          ...state
        };
        case SocketTypes.ROUND_DRAWINGS:
        return {
          ...state
        };
        case SocketTypes.GAME_OVER:
        return {
          ...state
        };
        default: 
        return state;
      }
    default:
    return state;
  }
};
