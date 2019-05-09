import * as ActionTypes from "./types";

export const getKey = () => ({
  type: ActionTypes.GET_GAME_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  }
});

export const addName = (playerName, game) => {
  return {
  type: ActionTypes.PLAYER_NAME,
  playerName,
  socket: {
    command: 'CONNECT',
    payload: game
  }
  }
}


// export const joinRoom = game => ({
//   type: ActionTypes.JOIN_ROOM,
//   socket: {
//     command: 'CONNECT',
//     payload: game
//   }
// });