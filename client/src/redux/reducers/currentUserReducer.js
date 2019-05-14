import * as ActionTypes from '../actions/gameTypes';

const initialState = {
  gameKey: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_KEY:
      return {
        ...state
      };
    case ActionTypes.PLAYER_INFO:
      return {
        ...state,
        playerName: action.playerName,
        gameKey: action.gameKey,
        isCreator: action.socket.type
      };
    case ActionTypes.USER_AVATAR:
      return {
        ...state,
        userAvatar: action.avatar
      };
    case ActionTypes.CREATOR_START_GAME:
      return {
        ...state
      };
    default:
      return state;
  }
};
