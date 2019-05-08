const ioConfig = io => {
  io.of('/game').on('connect', socket => {
    console.log('Client connected to Doggy with id: ', socket.id);
    socket.on('clientAction', client => {
      console.log('connected ', client);
      switch (client.type) {
        case 'createRoom':
          socket.join(client.payload.key);
          break;
        case 'joinRoom':
          socket.join(client.payload.key);
          socket.to(client.payload.key).emit('messageFromServer', { 
            type: 'newPlayer',
            payload: client.payload 
          })
          break;
        default:
          break;
      }

    })
  });
}
module.exports = ioConfig;