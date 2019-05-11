const socketHandler = {

  createRoom: (socket, message) => {
    store.dispatch(createGame(creationPlayer.gameKey))
    store.dispatch(addPlayer(creationPlayer));
    socket.join(creationPlayer.gameKey);
  },

  joinRoom: (socket, message) => {
    if (socket.adapter.rooms[message.payload.key] === undefined) {
      console.log(`Room ${message.payload.key} does not exist`);
      socket.emit('messageToClient', 'Room does not exist!');
    }
    else {
      const joiningPlayer = {
        playerId: socket.id,
        playerName: message.payload.playerName,
        playerAvatar: message.payload.avatarUrl,
        isCreator: false,
        gameKey: message.payload.key,
        draws: []  
      }
      store.dispatch(addPlayer(joiningPlayer));
      socket.join(message.payload.key);
      socket.to(message.payload.key).emit('messageFromServer', message)
    }
  },

  draw: async (socket, message) => {
    // get the best guess
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
    socket.player = message.payload.player;
  },
  startGame: (socket, message) => {
    const category = key.generate();
    const maxRound = 3;
    const currentRound = 0;
    socket.to(message.payload.key).emit('startGamr');
  },
  leaveRoom: (socket, message) => {
    socket.to(message.payload.key).emit('messageFromServer', message);
    socket.leave(message.payload.key);
  },
}

module.exports = socketHandler;