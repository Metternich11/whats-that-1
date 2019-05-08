import * as ActionTypes from "./types";

export const getKey = key => ({
  type: ActionTypes.GET_GAME_KEY,
  api: {
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/getGameKey`
  },
  socket: {
    command: 'CONNECT'
  },
  key
});

export const socketConnect = () => ({
  type: ActionTypes.SOCKET_CONNECT,
  socket: {
    command: 'CONNECT'
  }
});
