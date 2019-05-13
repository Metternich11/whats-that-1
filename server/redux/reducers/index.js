const ActionTypes = require('../actions/types');
const { omit } = require('lodash');

const initialState = {
  games: {},
  players: {}
};

/* sampleData = {const getWords = require('./getWords')
const { startRound } = require('./redux/actions');

class GameController {
  constructor(game, socketController) {
    this.game = game;
    this.socket = socketController;

    this.endRound = this.endRound.bind(this);
  }

  startGame () {
    //setup game
    try{
      startRound();
    } catch (e) {
      if(typeof e === GameNotEnoughPlayersError) {
        socket.sendNotEnoughPlayers();
      }
    }
  };

  adminJoin () {};
  playerJoin () {};


  startRound () {
    this.game.startNewRound(); // tells the game to increase currentRound (figures out the new word)
    socket.sendStart(this.game.currentRound); // sends the info for this round
    this.timer = setTimeout(this.endRound, 26000);
  };

  endRound() {
    socket.sendEndRound();
    if (this.game.isLastRound()) {
      this.endGame();
    } else {
      this.startRound();
    }
  };

  endGame () {
    socket.sendEndGame(this.game);
  };

  receiveDrawing(drawing) {
    this.game.addDrawing();
    if(this.game.isCurrentRoundComplete()) {
      clearTimeout(this.timer);
      this.endRound();
    }
  };
}

module.exports = GameController;
  games: {
    'dog-big': {
        round: {
              currentRound: 0,
              word: '',
              roundStatus: false
            },
        playing: false
        players: ['playerid1', 'playerid2', 'playerid3'],
    },
    'cat-small': {
        round: {
              currentRound: 0,
              word: '',
              roundStatus: false
            },
        playing: false
        players: ['playerid1', 'playerid2', 'playerid3'],
    },
  },
  
  players: {
    playerid1: {
      playerName: 'ShanShan',
      playerAvatar: 'http://avatarurl',
      roundWins: 0,
      isCreator: true,
      gameKey: 'dog-big',
      draws: [{
        round: 1,
        draw: image,
        word: cat,
        winner: true
      },
      {
        round: 2,
        draw: image,
        word: dog
      }
    ]
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
            round: {
              currentRound: 0,
              word: '',
              roundStatus: false
            },
            playing: false,
            players: [],
            totalRounds: action.totalRounds
          }
        }
      };

    case ActionTypes.ADD_PLAYER_TO_GAME:
      return {
        ...state,
        games: {
          ...state.games,
          [action.playerToGame.gameKey]: {
            ...state.games[action.playerToGame.gameKey],
            players: [
              ...state.games[action.playerToGame.gameKey].players,
              action.playerToGame.playerId
            ]
          }
        },
        players: {
          ...state.players,
          [action.playerToGame.playerId]: {
            ...state.players[action.playerToGame.playerId],
            gameKey: action.playerToGame.gameKey,
            isCreator: action.playerToGame.isCreator
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
        players: {
          ...state.players,
          [action.player.playerId]: {
            playerName: action.player.playerName,
            playerAvatar: action.player.playerAvatar,
            roundWins: [],
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
          [action.playerId]: {
            ...state.players[action.playerId],
            draws: [...state.players[action.playerId].draws, action.draw]
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

    case ActionTypes.START_ROUND:
      return {
        ...state,
        games: {
          ...state.games,
          [action.round.game]: {
            ...state.games[action.round.game],
            round: action.round.round
          }
        }
      };

    case ActionTypes.SET_ROUND_STATUS:
      return {
        ...state,
        games: {
          ...state.games,
          [action.gameKey]: {
            ...state.games[action.gameKey],
            round: {
              ...state.games[action.gameKey].round,
              roundStatus: action.status
            }
          }
        }
      };

    default:
      return state;
  }
};
