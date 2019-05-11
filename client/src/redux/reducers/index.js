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
    case ActionTypes.SOCKET_MESSAGE:
      switch(action.payload.type) {
        case SocketTypes.GAME_CREATED: 
        console.log('I AM ACTUALLY HERE')
        return {
          ...state,
          message: action.payload.payload
        };
        case SocketTypes.JOINED: 
        console.log('Join is working too')
        return {
          ...state,
          message: action.payload.payload
        }
      }
      break;
    default:
    return state;
  }
};
