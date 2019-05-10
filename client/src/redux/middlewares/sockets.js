import io from 'socket.io-client';

export const socket = store => {
  let socket;

  return next => action => {
    if (!action.socket) return next(action);
    const { command, payload, type } = action.socket;
    if (command) {
      switch (command) {
        case 'CONNECT':
          // socket = io(`${process.env.REACT_APP_SERVER_BASE_URL}`);
          socket = io('http://localhost:3100');
          next(action);
          break;
        default:
          break;
      }
    }

    // Inputs (on)
    socket.on('message', message => {
      console.log('AND OUR BE SAYS', message);  //eslint-disable-line
      store.dispatch({
        type: 'SOCKET_MESSAGE',     //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
        payload: message,
      });
    });

    // Outputs (emit)
    if (payload) {
      socket.emit('message', {
        type,
        payload
      });
    }
  };
};
