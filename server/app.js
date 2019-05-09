const Koa = require('koa');
const app = new Koa();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('kcors');
const bodyparser = require('koa-body');
const router = require('./router');
const port = 2000;

let server;

const ioConfig = require('./socketio/socketConfig');

function createServer() {
    app
      .use(cors())
      .use(bodyparser())
      .use(router.routes());
    server = app.listen(port, () => {
      console.log(`🚀 Server Running on ${port}`); //eslint-disable-line
  });
  io.listen(server);
  ioConfig(io);
  return server;
}

  function close () {
    server.close();
    console.log('server closed'); //eslint-disable-line
  }

module.exports = {
  createServer,
  close
};
