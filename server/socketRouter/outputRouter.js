const outputRouter = () => {
  return {
    io: {},

    initializeIO: IO => {
      this.io = IO;
    },

    joinRoom: (socket, roomKey) => {
      socket.join(roomKey);
    },
    sendMessageRoomFromServer: (mssg, roomKey) => {
      this.io.in(roomKey).emit('message', mssg);
    },
    sendMessageRoomFromClient: (socket, mssg, roomKey) => {
      socket.to(roomKey).emit('message', mssg);
    },
    sendMessageToClient: (socket, mssg) => {
      socket.emit('message', mssg);
    }
    // sendEndRound: (round) => {
    //   this.sendMessageRoomFromServer(
    //     handleMessage('endRound', {
    //       roundNum: await getCurrentRoundNumber(gameKey)
    //     }),
    //     gameKey
    //   );
    // }
  };
};

module.exports = outputRouter;
