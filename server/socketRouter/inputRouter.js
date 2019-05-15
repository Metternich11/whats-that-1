const IO = require('socket.io');
const gameController = require('../controllers/gameController')();

const inputRouter = httpServer => {
  const io = IO(httpServer);
  gameController.initialize(io);
  io.on('connect', socket => {
    console.log(socket.id); //eslint-disable-line
    socket.on('message', message => {
      switch (message.type) {
        case 'createGame':
          message.payload.gameKey = message.payload.gameKey.toLowerCase();
          gameController.createGame(socket, message);
          break;
        case 'joinGame' || 'playAgain':
          message.payload.gameKey = message.payload.gameKey.toLowerCase();
          gameController.joinGame(socket, message);
          break;
        case 'passDrawing':
          gameController.passDrawing(socket, message);
          break;
        case 'passFinalDrawing':
          gameController.passFinalDrawing(socket, message);
          break;
        case 'startGame':
          gameController.startGame(socket);
          break;
        case 'restartGame':
          gameController.restartGame(socket);
          break;
      }
    });
    socket.on('disconnect', () => gameController.playerDisconnected(socket));
  });
};

module.exports = inputRouter;
