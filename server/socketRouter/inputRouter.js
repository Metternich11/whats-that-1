const IO = require('socket.io');
const gameController = require('../controllers/gameController')();
// const socketArray = [];

const inputRouter = httpServer => {
  const io = IO(httpServer);
  io.on('connect', socket => {
    socket.on('message', message => {
      switch (message.type) {
        case 'createGame':
          gameController.createGame(socket, message);
          break;
        case 'joinRoom':
          gameController.joinRoom(socket, message);
          break;
        case 'receiveDraw':
          gameController.receiveDraw(socket, message);
          break;
        case 'receiveFinalDraw':
          gameController.receiveFinalDraw(socket, message);
          break;
        case 'startGame':
          gameController.startGame(socket, message);
          break;
        case 'leaveRoom':
          gameController.leaveRoom(socket, message);
          break;
      }
    })
  });
}

module.exports = inputRouter;
