const Koa = require("koa");
const app = new Koa();

const cors = require("kcors");
const bodyparser = require("koa-body");
const router = require("./router");
const port = 3000;

function create() {
  app
    .use(cors())
    .use(bodyparser())
    .use(router.routes());
  return app.listen(port, () => {
    console.log(`🚀 Server Running on ${port}`); //eslint-disable-line
  });
}

module.exports = {
  create
};
