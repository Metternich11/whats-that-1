const Router = require('koa-router');
const router = Router();
const controller = require('./controller');

router
  .get('/', controller.getAll)
  .get('/getGameKey', controller.getKey)
  .get('/lobby', controller.lobby)
  .get('/create', controller.create)
  .get('/join', controller.join);
  // .get('/game/:key', controller.newGame);

module.exports = router;
