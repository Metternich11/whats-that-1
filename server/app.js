const Koa = require('koa');
const app = new Koa();
const cors = require('kcors');
const bodyparser = require('koa-body');
const router = require('./router');
const port = 3000;
let server = '';

function create() {
  app
    .use(cors())
    .use(bodyparser())
    .use(router.routes());
  return (server = app.listen(port, () => {
    console.log(`🚀 Server Running on ${port}`); //eslint-disable-line
  }));
}

async function close () {
  await new Promise(resolve => server.close(resolve));
}

module.exports = {
  create,
  close
};
