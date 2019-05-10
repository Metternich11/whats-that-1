const gameController = require('../controllers/gameController');

const inputRouter = io => {
    io.on('connect', socket => {
    socket.on('clientAction', message => {
      switch (message.type) {
        case 'createRoom':
          gameController.createGame(socket, message);
          break;
        case 'joinRoom':
          gameController.joinRoom(socket, message);
          break;
        case 'receiveDraw':
          gameController.receiveDraw(socket, message);
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