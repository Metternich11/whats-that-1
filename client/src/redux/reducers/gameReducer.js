import * as SocketTypes from '../actions/socketTypes';
import * as ActionTypes from '../actions/gameTypes';

const initialState = {
  word: [],
  join: {},
  inBetweenRounds: false,
  endGame: false,
  guess: '',
  winners: []
}

export default (state = initialState, action) => {
  if (action.type === ActionTypes.SOCKET_MESSAGE) {
      switch (action.payload.type) {
      case SocketTypes.GAME_CREATED:
      return {
        ...state,
        gameKey: action.payload.payload.gameKey
      };
      case SocketTypes.JOINED:
      return {
        ...state,
        players: action.payload.payload.players
      };
      case SocketTypes.START_ROUND:
      return {
        ...state,
        word: action.payload.payload.word,
        timer: action.payload.payload.timer,
        inBetweenRounds: !state.inBetweenRounds
      };
      case SocketTypes.END_ROUND:
      return {
        ...state,
        round: action.payload.payload.roundNum
      };
      case SocketTypes.GUESS:
      return {
        ...state,
        guess: action.payload.payload.word
      };
      case SocketTypes.VICTORY:
      return {
        ...state,
        round: action.payload.payload.roundNum,
        winners: state.winners.concat(action.payload.payload.playerId)
      };
      case SocketTypes.ROUND_DRAWINGS:
      return {
        ...state
      };
      case SocketTypes.GAME_DRAWINGS:
      return {
        ...state,
        drawings: action.payload.payload.drawings
      }
      case SocketTypes.GAME_OVER:
      return {
        ...state,
        endGame: !state.endGame
      };
      default:
      return state;
    }
  } else {
    return state;
  }
  };
