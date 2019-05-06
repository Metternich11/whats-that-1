const Router = require('koa-router');
const router = Router();
const controller = require('./controller');

router
  .get('/', controller.getAll)
  .get('/lobby', controller.lobby)
  .get('/create', controller.create)
  .get('/join', controller.join);

module.exports = router;
