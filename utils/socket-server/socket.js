const ioConfig = io => {
  io.on('connect', client => {
    console.log('Client conected', client.id);
    client.on('room', client => console.log(client.msg));
    client.emit('welcome', { msg: 'Welcome this is server talking' });
  });
};

module.exports = ioConfig;
