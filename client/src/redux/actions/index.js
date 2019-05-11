import * as ActionTypes from "./types";
import * as SocketTypes from './socketTypes';

export const getKey = () => ({
  type: ActionTypes.GET_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  }
});

export const addName = (playerName, playerAvatar, gameKey, type) => ({
  type: ActionTypes.PLAYER_INFO,
  playerName,
  gameKey,
  socket: {
    command: 'CONNECT',
    type,
    payload: {
      player: {
        playerName,
        playerAvatar,
      },
      gameKey,
    }
  }
});

export const saveAvatar = (avatar) => ({
  type: ActionTypes.USER_AVATAR,
  avatar
});