
module.exports.getAll = async (ctx, next) => {
  try {
    ctx.body = 'hello';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};

module.exports.lobby = async (ctx, next) => {
  try {
    ctx.body = 'welcome to the lobby';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};

module.exports.create = async (ctx, next) => {
  try {
    ctx.body = 'create a game';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};

module.exports.join = async (ctx, next) => {
  try {
    ctx.body = 'join a game';
    ctx.status = 200;
    await next();
  } catch (error) {
    console.error(error); // eslint-disable-line
  }
};
