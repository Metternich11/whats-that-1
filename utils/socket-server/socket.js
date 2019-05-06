const ioConfig = io => {
  io.on('connect', client => {
    console.log('Client conected', client.id);
    client.on('messageClient', message => {
      switch (message.type) {
        case 'connect':
          client.emit('messageServer', {
            type: 'CREATE',
            payload: {
              key: 'doggy'
            }
          });
        const nsp = io.of('/game');
        nsp.on('connection', socket => {
          console.log('Have you connected?')
        })
        nsp.on('disconnect', socket => {
          console.log('Go away');
        })
      }
    });
    client.on('disconnect', () => {
      console.log('Client is disconnected!');
    })
  });
};

module.exports = ioConfig;
