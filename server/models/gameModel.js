/* eslint-disable no-console */
const store = require('../redux/store').createRedux();
const Actions = require('../redux/actions');

const gameModel = {
  addGame: async (gameKey, totalRounds) => {
    // CREATEGAME
    try {
      await store.dispatch(Actions.createGame(gameKey, totalRounds));
    } catch (error) {
      console.error(error);
    }
  },

  gameExists: async gameKey => {
    const state = await store.getState();
    return state.games[gameKey] ? true : false;
  },

  getCurrentGameKey: async playerId => {
    const state = await store.getState();
    return state.players[playerId].gameKey;
  },

  getRoundStatus: async gameKey => {
    const state = await store.getState();
    return state.games[gameKey].round.roundStatus;
  },

  setPlayerRoundWins: async playerId => {
    const state = await store.getState();
    let roundWins = state.players[playerId].roundWins;
    const win = {
      playerId,
      roundWins: roundWins++
    };
    await store.dispatch(Actions.setPlayerRoundWins(win));
  },

  setRoundStatus: async gameKey => {
    const state = await store.getState();
    let currentStatus = state.games[gameKey].round.roundStatus;
    await store.dispatch(Actions.setRoundStatus(gameKey, !currentStatus));
  },

  startRound: async (gameKey, word) => {
    // startGame
    try {
      const state = await store.getState();
      let currentRound = state.games[gameKey].round.currentRound;
      currentRound++;
      await store.dispatch(
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
      console.log(gameKey);
      const state = await store.getState();
      console.log(state.games[gameKey]);
      return state.games[gameKey].round.word;
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentRoundNumber: async gameKey => {
    try {
      const state = await store.getState();
      return state.games[gameKey].round.currentRound;
    } catch (error) {
      console.error(error);
    }
  },

  deleteGame: async gameKey => {
    // DELETE_GAME
    try {
      const state = await store.getState();
      if (state.games[gameKey]) {
        await Actions.deleteGame(gameKey);
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
      await store.dispatch(Actions.addPlayer(newPlayer));
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
      await store.dispatch(Actions.addPlayerToGame(playerToGame));
    } catch (error) {
      console.error(error);
    }
  },

  playerExist: async playerId => {
    try {
      const state = store.getState();
      return state.players[playerId] ? true : false;
    } catch (error) {
      console.error(error);
    }
  },

  addDrawToPlayer: playerId => {
    playerId;
  },

  playerWinRound: playerId => {
    //SET_PLAYER_ROUND_WINS
    playerId;
  },

  getPlayersFromGame: async gameKey => {
    // DARIO
    const state = store.getState();
    const playersId = state.games[gameKey].players;
    const players = [];

    playersId.forEach(playerId => {
      players.push({
        [playerId]: {
          playerName: state.players[playerId].playerName,
          playerAvatar: state.players[playerId].playerAvatar,
          playerId
        }
      });
    });
    return players;
  },

  getImagesFromRound: async (gameKey, roundNumber) => {
    // DARIO
    const state = await store.getState();
    const players = state.games[gameKey].players;
    const imagesFromRound = [];
    roundNumber;

    players.forEach(player => {
      imagesFromRound.push(state.players[player].draws);
      // player;
      // lastRound
      //   ? imagesFromRound.push(store.players[player].draws)
      //   : imagesFromRound.push(store.players[player].draws[roundNumber - 1]);
    });
    return imagesFromRound;
  },

  getImagesFromGame: gameKey => {
    gameKey;
  },

  setDrawingForRound: async (gameKey, playerId, image) => {
    const state = await store.getState();

    const result = {
      round: state.games[gameKey].round.currentRound,
      draw: image,
      word: state.games[gameKey].round.word
    };

    await store.dispatch(Actions.addDrawToPlayer(playerId, result));
    const state2 = await store.getState();
    console.log('PLAYERS', state2.players[playerId].draws);
  }
};

module.exports = gameModel;
