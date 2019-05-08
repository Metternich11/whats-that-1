const ActionTypes = require('../actions/types');

const createGame = game => ({
  type: ActionTypes.CREATE_GAME,
  game
});

const startGame = game => ({
  type: ActionTypes.START_GAME,
  game
});

const deleteGame = gameId => ({
  type: ActionTypes.DELETE_GAME,
  gameId
});

const addPlayer = player => ({
  type: ActionTypes.ADD_PLAYER,
  player
});

const addDrawToPlayer = draw => ({
  type: ActionTypes.ADD_DRAW_TO_PLAYER,
  draw
});

const setPlayerRoundWins = win => ({
  type: ActionTypes.SET_PLAYER_ROUND_WINS,
  win
});

module.exports = {
  createGame,
  addPlayer,
  addDrawToPlayer,
  setPlayerRoundWins,
  startGame,
  deleteGame
};
