const ActionTypes = require('../actions/types');
const { omit } = require('lodash');

const initialState = {
  games: {},
  players: {}
};

/* sampleData = {
  games: {
    'dog-big': {
      round: 0,
      playing: false
      players: ['playerid1', 'playerid2', 'playerid3'],
    },
    'cat-small': {
      round: 1,
      playing: true
      players: ['playerid5', 'playerid6', 'playerid8']
    }
  },

  players: {
    playerid1: {
      playerName: 'ShanShan',
      playerAvatar: 'http://avatarurl',
      roundWins: 0,
      isCreator: true,
      gameKey: 'dog-big',
      draws: []
    },
    playerid2: {
      playerName: 'Ole',
      playerAvatar: 'http://avatarurl',
      roundWins: 1,
      isCreator: false,
      gameKey: 'cat-small',
      draws: []
    }
  }
};
*/
exports.reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [action.game]: {
            round: 0,
            playing: false,
            players: []
          }
        }
      };

    case ActionTypes.START_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [action.game]: {
            ...state.games[action.game.gameId],
            round: 0,
            playing: true
          }
        }
      };
    case ActionTypes.DELETE_GAME:
      return {
        ...state,
        games: omit(state.games, action.gameId)
      };

    case ActionTypes.ADD_PLAYER:
      return {
        ...state,
        games: {
          ...state.games,
          [action.player.gameKey]: {
            players: [
              ...state.games[action.player.gameKey].players,
              action.player.playerId
            ]
          }
        },
        players: {
          ...state.players,
          [action.player.playerId]: {
            playerName: action.player.playerName,
            playerAvatar: action.player.playerAvatar,
            roundWins: 0,
            isCreator: action.player.isCreator,
            gameKey: action.player.gameKey,
            draws: []
          }
        }
      };

    case ActionTypes.ADD_DRAW_TO_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.draw.playerId]: {
            ...state.players[action.draw.playerId],
            draws: [
              ...state.players[action.draw.playerId].draws,
              action.draw.draw
            ]
          }
        }
      };
    case ActionTypes.SET_PLAYER_ROUND_WINS:
      return {
        ...state,
        players: {
          ...state.players,
          [action.win.playerId]: {
            roundWins: action.win.roundWins
          }
        }
      };

    default:
      return state;
  }
};
