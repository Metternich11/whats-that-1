import * as ActionTypes from "./types";

export const getKey = () => ({
  type: ActionTypes.GET_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  }
});

export const addName = (playerName, playerAvatar, game, type) => ({
  type: ActionTypes.PLAYER_INFO,
  playerName,
  socket: {
    command: 'CONNECT',
    type,
    payload: {
      playerName,
      playerAvatar,
      game,
    }
  }
});

export const saveAvatar = (avatar) => ({
  type: ActionTypes.USER_AVATAR,
  avatar
});