import * as ActionTypes from "./types";

export const getKey = () => ({
  type: ActionTypes.GET_GAME_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  },
  socket: {
    command: 'CREATE'
  }
});

export const joinRoom = () => ({
  type: ActionTypes.JOIN_ROOM,
  socket: {
    command: 'CONNECT'
  }
})

// export const socketConnect = () => ({
//   type: ActionTypes.SOCKET_CONNECT,
//   socket: {
//     command: 'CONNECT'
//   }
// });
