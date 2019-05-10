import * as ActionTypes from "../actions/types";

const initialState = {
  gameKey: undefined,
};

export default (state = initialState, action) => {
  console.log('Here goes the ', action) //eslint-disable-line
  switch (action.type) {
    case ActionTypes.GET_GAME_KEY:
    return {
      ...state,
      gameKey: action.data.key
    };
    case ActionTypes.PLAYER_INFO:
    return {
      ...state,
      playerName: action.playerName
    };
    case ActionTypes.USER_AVATAR:
    return {
      ...state,
      userAvatar: action.avatar
    };
    case ActionTypes.SOCKET_MESSAGE:
    return {
      ...state,
      message: action.payload.payload.key //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
    }
    case 'GET_KEY_SUCCESS':
    case 'GET_KEY_FAILURE':
    return {
      ...state
    }
    default:
    return state;
  }
};
