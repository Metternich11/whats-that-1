const outputRouter = {
  join: (socket, key) => {
    socket.join(key);
  },
  sendMessageRoom: (socket, message) => {
    socket.to(message.payload.key).emit('message', message)
  }
}

module.exports = outputRouter;