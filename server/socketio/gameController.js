const key = require('../model/gamekey');

const gameController = {
  createRoom: (socket, message) => {
    socket.join(message.payload.key);
  },
  joinRoom: (socket, message) => {
    if (socket.adapter.rooms[message.payload.key] === undefined) {
      socket.emit('messageToClient', 'Room does not exist!');
    }
    else {
      socket.join(message.payload.key);
      socket.to(message.payload.key).emit('messageFromServer', { 
        type: 'newPlayer',
        payload: message.payload 
      })
    }
  },
  draw: (socket, message) => {

  },
  startGame: (socket, message) => {

  },
  leaveRoom: (socket, message) => {

  },
  gameOver: (socket, message) => {

  },
}

module.exports = gameController;

