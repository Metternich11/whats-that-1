const Router = require('koa-router');
const router = Router();
const controller = require('./controller');

router
  .get('/', controller.getAll)
  .get('/getGameKey', controller.getKey);

module.exports = router;
