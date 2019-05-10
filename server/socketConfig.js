const clientController = require('./controllers/clientController');

const ioConfig = io => {

  io.of('/game').on('connect', socket => {
    console.log('connected: ', socket.id);
    socket.on('clientAction', message => {
      clientController[message.type](socket, message);
    })
  });
}
module.exports = ioConfig;
