import * as ActionTypes from "./types";

export const getKey = () => ({
  type: ActionTypes.GET_GAME_KEY,
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

// export const socketTest = message => {  //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
//   console.log('HEEEEEEEEEEEEEEEY!!!!!!!!!!!!!!!!!!!1')
//   return {
//     type: ActionTypes.SOCKET_MESSAGE,
//     message
//   }
// }





// export const joinRoom = game => ({
//   type: ActionTypes.JOIN_ROOM,
//   socket: {
//     command: 'CONNECT',
//     payload: game
//   }
// });