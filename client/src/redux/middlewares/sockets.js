import io from 'socket.io-client';

export const socket = store => {
  let socket;

  return next => action => {
    if (!action.socket) return next(action);
    const { command, payload, type } = action.socket;
    console.log('in socket');
    if (command) {
      switch (command) {
        case 'CONNECT':
          socket = io(`${process.env.REACT_APP_SERVER_BASE_URL}`);
          //socket = io('http://localhost:3100');
          next(action);
          break;
        default:
          break;
      }

      socket.on('message', message => {
        logger('IN');
        console.log('AND OUR BE SAYS', message); //eslint-disable-line
        store.dispatch({
          type: 'SOCKET_MESSAGE', //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
          payload: message
        });
      });
    }

    // Inputs (on)
    socket.on('message', message => {
      console.log('INPUT', message);  //eslint-disable-line
      store.dispatch({
        type: 'SOCKET_MESSAGE',     //THIS IS A TEST, THIS IS NOT CORRECT OR FINAL
        payload: message,
      });
    });

    // Outputs (emit)
    if (payload) {
      console.log('HERE', payload);
      socket.emit('message', {
        type,
        payload
      });
    }
  };
};

let num = 1;

function logger(to) {
  console.log(to, num);
  num++;
}
