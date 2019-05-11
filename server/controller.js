/* eslint-disable no-console */
const Key = require('./helpers/requestGameKey');

module.exports.getAll = async (ctx, next) => {
  try {
    ctx.body = await {key: 'doggy'};
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.getKey = async (ctx, next) => {
  try {
    const key = Key.generate();
    ctx.body = key;
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};
