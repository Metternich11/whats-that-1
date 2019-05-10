const gameController = require('../controllers/gameController');
const socketArray = [];

const inputRouter = io => {
    io.on('connect', socket => {
      socketArray.push(socket.id);
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