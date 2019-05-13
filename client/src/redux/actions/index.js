import * as ActionTypes from "./gameTypes";

export const getKey = () => ({
  type: ActionTypes.GET_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  }
});

export const saveAvatar = (avatar) => ({
  type: ActionTypes.USER_AVATAR,
  avatar
});

export const connectGame = (playerName, playerAvatar, gameKey, type) => ({
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

export const startGame = () => ({
  type: ActionTypes.CREATOR_START_GAME,
  socket: {
    type: 'startGame',
    payload: {
      message: 'BE, start the game!'
    }
  }
});

export const passDrawing = drawing => {
  return {
    type: ActionTypes.PASS_DRAWING,
    socket: {
      type: 'passDrawing',
      payload: {
        drawing
      }
    }
  }
};