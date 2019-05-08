const key = require('../model/gamekey');

const gameController = {
  createPlayer: (socket, message) => {
    socket.player = message.payload.player;
  },
  createRoom: (socket, message) => {
    socket.join(message.payload.key);
  },
  joinRoom: (socket, message) => {
    if (socket.adapter.rooms[message.payload.key] === undefined) {
      socket.emit('messageToClient', 'Room does not exist!');
    }
    else {
      socket.join(message.payload.key);
      socket.to(message.payload.key).emit('messageFromServer', socket.id)
    }
  },
  draw: (socket, message) => {

  },
  startGame: (socket, message) => {
    const category = key.generate();
    const maxRound = 3;
    const currentRound = 0;
    socket.to(message.payload.key).emit('startGamr');
  },
  leaveRoom: (socket, message) => {
    socket.leave(message.payload.key);
  },
  gameOver: (socket, message) => {

  },
}

module.exports = gameController;

