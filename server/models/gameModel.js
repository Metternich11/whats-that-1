/* eslint-disable no-console */
const store = require('../redux/store').createRedux();
const Actions = require('../redux/actions');
let state = store.getState();
store.subscribe(() => {
  state = store.getState();
});
const gameModel = {
  addGame: async (gameKey, totalRounds) => {
    // CREATEGAME
    try {
      store.dispatch(Actions.createGame(gameKey, totalRounds));
    } catch (error) {
      console.error(error);
    }
  },

  gameExists: async gameKey => {
    return state.games[gameKey] ? true : false;
  },

  getCurrentGameKey: async playerId => {
    console.log(state.players[playerId]);
    return state.players[playerId].gameKey;
  },

  getRoundStatus: async gameKey => {
    return state.games[gameKey].round.roundStatus;
  },

  setPlayerRoundWins: async playerId => {
    const gameKey = state.players[playerId].gameKey;
    const round = state.games[gameKey].round.currentRound;
    let roundWins = state.players[playerId].roundWins;

    const win = {
      playerId,
      roundWins: [
        ...roundWins,
        {
          round,
          winner: true
        }
      ]
    };
    store.dispatch(Actions.setPlayerRoundWins(win));
  },

  setRoundStatus: async gameKey => {
    let currentStatus = state.games[gameKey].round.roundStatus;
    store.dispatch(Actions.setRoundStatus(gameKey, !currentStatus));
  },

  startRound: async (gameKey, word) => {
    // startGame
    try {
      let currentRound = state.games[gameKey].round.currentRound;
      currentRound++;
      store.dispatch(
        Actions.startRound({
          game: gameKey,
          round: {
            currentRound,
            word,
            roundStatus: true
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentWord: async gameKey => {
    try {
      return state.games[gameKey].round.word;
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentRoundNumber: async gameKey => {
    try {
      return state.games[gameKey].round.currentRound;
    } catch (error) {
      console.error(error);
    }
  },

  resetGameState: async gameKey => {
    // DELETE_GAME
    try {
      if (state.games[gameKey]) {
        Actions.deleteGame(gameKey);
      } else {
        throw 'gameDoesNotExist';
      }
    } catch (error) {
      console.error(error);
    }
  },

  addPlayer: async (player, playerId) => {
    try {
      const newPlayer = {
        playerId,
        playerName: player.playerName,
        playerAvatar: player.playerAvatar,
        isCreator: false,
        gameKey: '',
        draws: []
      };
      store.dispatch(Actions.addPlayer(newPlayer));
    } catch (error) {
      console.error(error);
    }
  },

  addPlayerToGame: async (playerId, gameKey, isCreator = false) => {
    try {
      const playerToGame = {
        playerId,
        isCreator,
        gameKey
      };
      store.dispatch(Actions.addPlayerToGame(playerToGame));
    } catch (error) {
      console.error(error);
    }
  },

  playerExist: async playerId => {
    try {
      return state.players[playerId] ? true : false;
    } catch (error) {
      console.error(error);
    }
  },

  getPlayersFromGame: async gameKey => {
    const playersId = state.games[gameKey].players;
    const players = {};
    if (!playersId || !Object.keys(playersId).length) return players;
    playersId.forEach(playerId => {
      players[playerId] = {
        playerName: state.players[playerId].playerName,
        playerAvatar: state.players[playerId].playerAvatar,
        playerId
      };
    });
    return players;
  },

  getImagesFromRound: async (gameKey, roundNumber) => {
    const players = await state.games[gameKey].players;
    const imagesFromRound = [];

    players.forEach(player => {
      imagesFromRound.push(state.players[player].draws[roundNumber - 1]);
    });
    return imagesFromRound;
  },

  getImagesFromGame: async gameKey => {
    const players = state.games[gameKey].players;
    const imagesFromRound = [];

    players.forEach(player => {
      imagesFromRound.push(state.players[player].draws);
    });
    return imagesFromRound;
  },

  cleanPlayerForNewGame: async playerId => {
    store.dispatch(Actions.cleanPlayerForNewGame(playerId));
  },

  deletePlayer: async (playerId, gameKey) => {
    store.dispatch(Actions.deletePlayer(playerId));
    store.dispatch(Actions.deletePlayerFromGame(playerId, gameKey));

    const playersInGame = state.games[gameKey].players;

    if (playersInGame == 'undefined' || playersInGame.length < 1) {
      gameModel.deleteGame(gameKey);
    }
    return;
  },

  setDrawingForRound: async (gameKey, playerId, image) => {
    const winner = state.players[playerId].roundWins || false;

    const result = {
      round: state.games[gameKey].round.currentRound,
      draw: image,
      word: state.games[gameKey].round.word,
      winner
    };

    store.dispatch(Actions.addDrawToPlayer(playerId, result));
  },

  getCurrentGameState: async gameKey => {
    let currentGame = { ...state.games[gameKey], gameKey };
    console.log(currentGame);
    if (currentGame.players.length !== undefined) {
      currentGame.players = currentGame.players.map(id => {
        let currentPlayer = state.players[id];
        console.log('TCL: state.players', state.players);

        console.log('id: ', id);
        currentPlayer[id] = id;
        return currentPlayer;
      });
    }
    return currentGame;
  },

  reset: async gameKey => {
    store.dispatch(Actions.resetGame(gameKey));
  }
};

module.exports = gameModel;
