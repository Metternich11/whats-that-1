const ActionTypes = require('../actions/types');

const initialState = {
  games: {},
  players: {}
};

/* sampleData = {
  games: {
    'dog-big': {
      round: 0,
      players: ['playerid1', 'playerid2', 'playerid3']
    },
    'cat-small': {
      round: 1,
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
            players: []
          }
        }
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
    case ActionTypes.PLAYER_WIN_ROUND:
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
