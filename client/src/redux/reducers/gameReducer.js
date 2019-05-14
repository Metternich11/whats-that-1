import * as SocketTypes from '../actions/socketTypes';
import * as ActionTypes from '../actions/gameTypes';

const initialState = {
  word: [],
  join: {},
  inBetweenRounds: false,
  endGame: false,
  guess: ''
}

export default (state = initialState, action) => {
  if (action.type == ActionTypes.SOCKET_MESSAGE) {
      switch (action.payload.type) {
      case SocketTypes.GAME_CREATED:
      return {
        ...state
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
        timer: action.payload.payload.timer
        // inBetweenRounds: !state.inBetweenRounds
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
      console.log('STATE IS', state);
      return {
        ...state,
        // winner: state.winner.concat(action.payload.payload.playerId)
      };
    case SocketTypes.ROUND_DRAWINGS:
      return {
        ...state
      };
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
