const outputRouter = {
  io: {},

  initialize: IO => {
    this.io = IO;
  },

  join: (socket, key) => {
    socket.join(key);
  },
  sendMessageRoomFromServer: (mssg, roomKey) => {
    this.io.in(roomKey).emit('message', mssg);
  },
  sendMessageRoomFromClient: (socket, mssg, roomKey) => {
    socket.to(roomKey).emit('message', mssg);
  },
  sendMessageToClient: (socket, mssg) => {
    socket.emit('message', mssg);
  },
  leaveRoom: (socket, roomKey) => {
    socket.leave(roomKey);
  }
};

module.exports = outputRouter;
