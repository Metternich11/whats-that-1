const Koa = require('koa');
const app = new Koa();
const cors = require('kcors');
const bodyparser = require('koa-body');
const router = require('./router');
const port = 3000;
const IO = require('koa-socket-2');
const io = new IO();
let server;

const ioConfig = require('./socket');

function createServer() {
  return new Promise(resolve => {
    app
      .use(cors())
      .use(bodyparser())
      .use(router.routes());
    io.attach(app);
    ioConfig(io);
    server = app.listen(port, () => {
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
