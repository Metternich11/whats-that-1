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
          console.log('input created', message);
          gameController.createGame(socket, message);
          break;
        case 'joinGame':
          console.log('input joined', message);
          gameController.joinGame(socket, message);
          break;
        case 'passDrawing':
        console.log('input passDrawing', message);
          gameController.passDrawing(socket, message);
          break;
        case 'passFinalDrawing':
        console.log('input passFinalDrawing', message);
          gameController.passFinalDrawing(socket, message);
          break;
        case 'startGame':
        console.log('input startGame', message);
          gameController.startGame(socket);
          break;
      }
    });
    socket.on('disconnect', () => console.log('Client disconnected'));
  });
};

module.exports = inputRouter;
