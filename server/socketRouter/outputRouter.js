
const outputRouter = () => {
  return {
    io: {},

    initializeIO: IO => {
      console.log('initializing done()');
      this.io = IO;
    },
  
    joinRoom: (socket, roomKey) => {
      console.log(`player ${socket.id} joined room ${roomKey}`);
      socket.join(roomKey);
    },
    sendMessageRoomFromServer: (mssg, roomKey) => {
      console.log(`${mssg}  ${this.io.room}`)
      this.io.in(roomKey).emit('message', mssg);
    },
    sendMessageRoomFromClient: (socket, mssg, roomKey) => {
      socket.to(roomKey).emit('message', mssg);
    },
    sendMessageToClient: (socket, mssg) => {
      console.log(`${mssg} to ${socket.id}`);
      socket.emit('message', mssg);
    },
  }
};

module.exports = outputRouter;
