import io from 'socket.io-client';

export const socket = store => {
  let socket;

  return next => action => {
    if (!action.socket) return next(action);
    const { command, payload } = action.socket;
    if (command) {
      switch (command) {
        case 'CREATE':
          // socket = io(`${process.env.REACT_APP_SERVER_BASE_URL}`);
          socket = io('http://localhost:3100');
          socket.emit('message', payload);
          break;
        case 'CONNECT':
          console.log('whatever, friend')
        break;
        default:
          break;
      }
    }

    // Inputs (on)
    socket.on('message', message => {
      store.dispatch(message);
    });

    // Outputs (emit)
    if (payload) {
      socket.emit('message', payload);
    }
  };
};
