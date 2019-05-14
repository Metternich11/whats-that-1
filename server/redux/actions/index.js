const ActionTypes = require('../actions/types');

const createGame = (game, totalRounds) => ({
  type: ActionTypes.CREATE_GAME,
  game,
  totalRounds
});

const deletePlayer = playerId => ({
  type: ActionTypes.DELETE_PLAYER,
  playerId
});

const deletePlayerFromGame = (playerId, gameKey) => ({
  type: ActionTypes.DELETE_PLAYER_FROM_GAME,
  playerId,
  gameKey
});

const startGame = (game, totalRounds) => ({
  type: ActionTypes.START_GAME,
  game,
  totalRounds
});

const addPlayerToGame = playerToGame => ({
  type: ActionTypes.ADD_PLAYER_TO_GAME,
  playerToGame
});

const deleteGame = gameId => ({
  type: ActionTypes.DELETE_GAME,
  gameId
});

const addPlayer = player => ({
  type: ActionTypes.ADD_PLAYER,
  player
});

const addDrawToPlayer = (playerId, draw) => ({
  type: ActionTypes.ADD_DRAW_TO_PLAYER,
  playerId,
  draw
});

const setPlayerRoundWins = win => ({
  type: ActionTypes.SET_PLAYER_ROUND_WINS,
  win
});

const startRound = round => ({
  type: ActionTypes.START_ROUND,
  round
});

const setRoundStatus = (gameKey, status) => ({
  type: ActionTypes.SET_ROUND_STATUS,
  gameKey,
  status
});

const cleanPlayerForNewGame = playerId => ({
  type: ActionTypes.CLEAN_PLAYER_FOR_NEW_GAME,
  playerId
});

module.exports = {
  createGame,
  addPlayer,
  addDrawToPlayer,
  setPlayerRoundWins,
  startGame,
  deleteGame,
  startRound,
  addPlayerToGame,
  setRoundStatus,
  deletePlayer,
  deletePlayerFromGame,
  cleanPlayerForNewGame
};
