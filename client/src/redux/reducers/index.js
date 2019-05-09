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
    case ActionTypes.PLAYER_INFO:
    return {
      ...state,
      playerName: action.playerName
    };
    case ActionTypes.USER_AVATAR:
    return {
      ...state,
      userAvatar: action.avatar
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
