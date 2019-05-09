import * as ActionTypes from "../actions/types";

const initialState = {
  gameKey: undefined,
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.GET_GAME_KEY:
    return {
      ...state,
      gameKey: action.data.key
    };
    case ActionTypes.PLAYER_NAME:
    return {
      ...state,
      playerName: action.playerName,
      gameKey: action.socket.payload
    };
    case ActionTypes.JOIN_ROOM:
    return {
      ...state,
      joinGameKey: action.data.key
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
