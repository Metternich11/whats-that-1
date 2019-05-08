import * as ActionTypes from "../actions/types";

const initialState = {
  gameKey: undefined,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_GAME_KEY:
    return {
      ...state,
      gameKey: action.data.key
    };
    case ActionTypes.SOCKET_CONNECT:
    return {
      ...state,
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
