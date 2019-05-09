const key = require('../helpers/requestGameKey');
const requestQuickDraw = require('../helpers/requestGuess'); 

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
  draw: async (socket, message) => {
    // get the best guess and update state - "add draw to player"?
    const guess = await requestQuickDraw(message.payload);
    // pass the best guess to the player
    socket.emit('message', {
      type: 'receiveWord',
      payload: {
        guess
      }
    })
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

