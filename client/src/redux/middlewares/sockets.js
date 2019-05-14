import io from 'socket.io-client';

export const socket = store => {
  let socket;

  return next => action => {
    if (!action.socket) return next(action);
    const { command, payload, type } = action.socket;
    if (command) {
      switch (command) {
        case 'CONNECT':
          socket = io(`${process.env.REACT_APP_SERVER_BASE_URL}`);
          next(action);
          break;
          default:
          break;
        }
        
        socket.on('connect', () => {
          store.dispatch({
            type: 'SET_USERID',
            payload: socket.id
          });
        });

        socket.on('message', message => {
          console.log('INPUT', message);  //eslint-disable-line
          store.dispatch({
            type: 'SOCKET_MESSAGE',
            payload: message
          });
        });
      }
      
    // Outputs (emit)
    if (payload) {
      socket.emit('message', {
        type,
        payload
      });
    }
  };
};
