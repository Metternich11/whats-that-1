const Koa = require('koa');
const app = new Koa();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('kcors');
const bodyparser = require('koa-body');
const router = require('./router');
const port = 3000;

let server;

const ioConfig = require('./socket');

function createServer() {
  return new Promise(resolve => {
    app
      .use(cors())
      .use(bodyparser())
      .use(router.routes());
    ioConfig(io);
    server = http.listen(port, () => {
      console.log(`🚀 Server Running on ${port}`);
      resolve(server);
    });
  });
}

  function close () {
    console.log('Closing server…');
    return new Promise(resolve => app._io.close(() => {
      console.log('server closed');
      resolve(server);
    }));
  }

module.exports = {
  createServer,
  close
};
