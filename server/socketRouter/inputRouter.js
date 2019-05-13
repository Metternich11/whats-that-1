const IO = require('socket.io');
const gameController = require('../controllers/gameController')();
// const socketArray = [];

const inputRouter = httpServer => {
  const io = IO(httpServer);
  gameController.initialize(io);
  io.on('connect', socket => {
    console.log(socket.id); //eslint-disable-line
    socket.on('message', message => {
      switch (message.type) {
        case 'createGame':
          gameController.createGame(socket, message);
          break;
        case 'joinGame':
          gameController.joinGame(socket, message);
          break;
        case 'passDrawing':
          gameController.passDrawing(socket, message);
          break;
        case 'receiveFinalDraw':
          gameController.receiveFinalDraw(socket, message);
          break;
        case 'startGame':
          gameController.startGame(socket);
          break;
        case 'leaveRoom':
          gameController.leaveRoom(socket, message);
          break;
      }
    });
  });
};

module.exports = inputRouter;
