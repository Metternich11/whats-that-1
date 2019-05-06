/* eslint-disable no-console */
const Key = require('./model/gamekey');

module.exports.getAll = async (ctx, next) => {
  try {
    ctx.body = 'hello';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.getKey = async (ctx, next) => {
  try {
    const index = Math.floor(Math.random() * Key.length);
    const selected = await Key[index];
    ctx.body = JSON.stringify(selected.id);
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.lobby = async (ctx, next) => {
  try {
    ctx.body = 'welcome to the lobby';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.create = async (ctx, next) => {
  try {
    ctx.body = 'create a game';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.join = async (ctx, next) => {
  try {
    ctx.body = 'join a game';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error);
  }
};
