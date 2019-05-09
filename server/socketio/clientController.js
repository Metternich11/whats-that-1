const key = require('../helpers/requestGameKey');
const requestQuickDraw = require('../helpers/requestGuess'); 
const store = require('../redux/store').createRedux();
const { createGame, addPlayer } = require('../redux/actions/');
const mocks= require('../redux/mock');

const clientController = {
  createRoom: (socket, message) => {
    store.dispatch(createGame(message.payload.key))
    // console.log('room created', store.getState());
    socket.join(message.payload.key);
  },
  joinRoom: (socket, message) => {
    if (socket.adapter.rooms[message.payload.key] === undefined) {
      console.log(`Room ${message.payload.key} does not exist`);
      socket.emit('messageToClient', 'Room does not exist!');
    }
    else {
      store.dispatch(addPlayer(mocks.demoPlayer));
      socket.join(message.payload.key);
      // console.log(store.getState())
      const obj = {
        type: message.type,
        payload: {
          id: socket.id,
          name: 'Shanshan',
          url: 'www.image.com'
        }
      }
      socket.to(message.payload.key).emit('messageFromServer', obj)
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
  createPlayer: (socket, message) => {
    // store.dispatch(Actions.addPlayer(mocks.demoPlayer));
    socket.player = message.payload.player;
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
  roundOver: (socket, message) => {

  },
  gameOver: (socket, message) => {

  },
}

module.exports = clientController;

