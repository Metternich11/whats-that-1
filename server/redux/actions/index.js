const ActionTypes = require('../actions/types');

const createGame = game => ({
  type: ActionTypes.CREATE_GAME,
  game
});

const addPlayer = player => ({
  type: ActionTypes.ADD_PLAYER,
  player
});

const addDrawToPlayer = draw => ({
  type: ActionTypes.ADD_DRAW_TO_PLAYER,
  draw
});

const playerWinRound = win => ({
  type: ActionTypes.PLAYER_WIN_ROUND,
  win
});

module.exports = {
  createGame,
  addPlayer,
  addDrawToPlayer,
  playerWinRound
};
