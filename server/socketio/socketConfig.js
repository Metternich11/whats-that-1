const gameController = require('./gameController');

const ioConfig = io => {
  io.of('/game').on('connect', socket => {
    socket.on('clientAction', message => {
      gameController[message.type](socket, message);
    })
  });
}
module.exports = ioConfig;
