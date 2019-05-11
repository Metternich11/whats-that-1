const outputRouter = {
  join: (socket, key) => {
    socket.join(key);
  },
  sendMessageRoomFromServer: (mssg, roomKey) => {
    io.in(roomKey).emit('message', mssg); // eslint-disable-line
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
