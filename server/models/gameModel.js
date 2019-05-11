const store = require('../redux/store').createRedux();
const Actions = require('../redux/actions');
/* eslint-disable no-console */
// games: {
//   'dog-big': {
//       round: {
//             currentRound: 0,
//             word: '',
//             roundStatus: false
//           },
//       playing: false
//       players: ['playerid1', 'playerid2', 'playerid3'],
//   }

const gameModel = {
  addGame: gameKey => {
    // CREATEGAME
    try {
      store.dispatch(Actions.createGame(gameKey));
      return true;
    } catch (error) {
      console.error(error);
    }
  },

  gameExists: gameKey => {
    return store.games[gameKey] ? true : false;
  },

  startGame: (gameKey, word) => {
    // startGame
    try {
      let currentRound = store.games[gameKey].round.currentRound;
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
      return true;
    } catch (error) {
      console.log(error);
    }
  },

  getCurrentWord: gameKey => {
    try {
      return store.games[gameKey].round.word;
    } catch (error) {
      console.error(error);
    }
  },

  getCurrentRoundNumber: gameKey => {
    try {
      return store.games[gameKey].round.currentRound;
    } catch (error) {
      console.error(error);
    }
  },

  deleteGame: gameKey => {
    // DELETE_GAME
    try {
      if (store.games[gameKey]) {
        Actions.deleteGame(gameKey);
        return true;
      } else {
        throw 'gameDoesNotExist';
      }
    } catch (error) {
      console.error(error);
    }
  },

  addPlayer: (player, playerId) => {
    // players: {
    //   playerid1: {
    //     playerName: 'ShanShan',
    //     playerAvatar: 'http://avatarurl',
    //     roundWins: 0,
    //     isCreator: true,
    //     gameKey: 'dog-big',
    //     draws: []
    //   },
    try {
      const newPlayer = {
        playerId,
        playerName: player.playerName,
        playerAvatar: player.avatarObj,
        isCreator: false,
        gameKey: '',
        draws: []
      };
      store.dispatch(Actions.addPlayer(newPlayer));
      return true;
    } catch (error) {
      console.error(error);
      throw 'playerDoesNotExist';
    }
  },

  addPlayerToGame: (playerId, gameId, isCreator) => {
    store.dispatch(Actions.addPlayerToGame(newPlayer));
  },

  playerExist: playerId => {
    try {
      return store.players[playerId] ? true : false;
    } catch (error) {
      console.error(error);
    }
  },

  addDrawToPlayer: playerId => {},

  playerWinRound: playerId => {
    //SET_PLAYER_ROUND_WINS
  },

  getImagesFromRound: (gameKey, roundNumber) => {
    const state = store.getState();
    const players = state.games[gameKey].players;
    const imagesFromRound = [];

    players.forEach(player => {
      // lastRound
      //   ? imagesFromRound.push(store.players[player].draws)
      //   : imagesFromRound.push(store.players[player].draws[roundNumber - 1]);
    });

    return imagesFromRound;
  },

  getImagesFromGame: gameKey => {}
};

module.exports = gameModel;
