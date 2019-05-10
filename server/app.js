const Koa = require('koa');
const http = require('http');
const IO = require('socket.io');
const cors = require('kcors');
const bodyparser = require('koa-body');

const router = require('./router');
const PORT = 2000;

const ioConfig = require('./socketio/socketConfig');

function App(port = PORT) {
  this.koa = new Koa();
  this.httpServer = http.Server(this.koa);
  this.io = IO(this.httpServer);
  this.server;

  this.teardown = () => {
    // console.log('Closing server…'); //eslint-disable-line
    return new Promise(resolve => {
      this.io.close(() => {
        console.log('Server closed'); //eslint-disable-line
        resolve();
      });
    });
  };

  return new Promise(resolve => {
    this.koa
      .use(cors())
      .use(bodyparser())
      .use(router.routes());

    this.server = this.koa.listen(port, error => {
      if (error) return console.error('ERROR', error);
      console.log(`🚀 Server Running on ${port}`); //eslint-disable-line
      this.io.listen(this.server);

      // TODO: REPLACE WITH SOCKET CONTROLLER
      this.io.on('connect', socket => {
        socket.on('message', () => {
          socket.emit('message');
        });
      });
      // -TODO

      ioConfig(this.io);

      resolve(this);
    });
  });
}

module.exports = App;
