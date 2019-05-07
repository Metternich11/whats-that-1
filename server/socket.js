const ioConfig = (io) => {
  io.on('connection', (ctx, socketID) => {
    console.log('client connected with socketID', socketID);
    ctx.socket.on('message', msg => {
      ctx.socket.emit('message', msg);
      console.log(msg);
    })
  });
}

module.exports = ioConfig;