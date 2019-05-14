const outputRouter = () => {
  return {
    io: {},

    initializeIO: IO => {
      this.io = IO;
    },

    joinRoom: (socket, roomKey) => {
      console.log('OUTPUT JOINROOM')
      socket.join(roomKey);
    },
    sendMessageRoomFromServer: (mssg, roomKey) => {
      console.log('OUTPUT MESSAGEFROMSERVER', mssg)

      this.io.in(roomKey).emit('message', mssg);
    },
    sendMessageRoomFromClient: (socket, mssg, roomKey) => {
      console.log('OUTPUT MESSAGEFROMCLIENT', mssg)

      socket.to(roomKey).emit('message', mssg);
    },
    sendMessageToClient: (socket, mssg) => {
      console.log('OUTPUT MESSAGETOCLIENT', mssg)

      socket.emit('message', mssg);
    }
  };
};

module.exports = outputRouter;
