const outputRouter = () => {
  return {
    io: {},

    initializeIO: IO => {
      this.io = IO;
    },

    joinRoom: (socket, roomKey) => {
      console.log('JOINROOM')
      socket.join(roomKey);
    },
    sendMessageRoomFromServer: (mssg, roomKey) => {
      console.log('MESSAGEFROMSERVER')

      this.io.in(roomKey).emit('message', mssg);
    },
    sendMessageRoomFromClient: (socket, mssg, roomKey) => {
      console.log('MESSAGEFROMCLIENT')

      socket.to(roomKey).emit('message', mssg);
    },
    sendMessageToClient: (socket, mssg) => {
      console.log('MESSAGETOCLIENT')

      socket.emit('message', mssg);
    }
  };
};

module.exports = outputRouter;
