const Koa = require('koa');
const Http = require('http');
const cors = require('kcors');
const bodyparser = require('koa-body');

const router = require('./router');
const PORT = 2000;

const inputRouter = require('./socketRouter/inputRouter');

const setUpKoa = () => {
  const koa = new Koa();
  koa
    .use(cors())
    .use(bodyparser())
    .use(router.routes());
  return koa;
};

/* 
App sets up both RESTful (koa) and Socket (io) interfaces
Also provides of an API to close them.
*/
function App(port = PORT) {
  this.create = async () => {
    this.koa = setUpKoa();
    this.server = Http.createServer(this.koa.callback());
    this.io = inputRouter(this.server);

    await new Promise((resolve, reject) => {
      this.server.listen(port, error => {
        if (error) reject(error);
        else resolve();
      });
    });
    console.log(`🚀 Server Running on ${port}`); //eslint-disable-line

    return this;
  };

  this.teardown = () => {
    return new Promise(resolve => {
      this.server.close(() => {
        resolve();
      });
    });
  };

  return this.create();
}

module.exports = App;