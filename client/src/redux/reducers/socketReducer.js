import * as SocketTypes from '../actions/socketTypes';

const initialState = {
  word: [],
  join: {},
  inBetweenRounds: false,
  endGame: false,
}

const socketReducer = (state = initialState, action) => {
  console.log('HERE GOES THE SOCKET ACTION: ', action);
  switch (action.payload.type) {
    case SocketTypes.GAME_CREATED:
      return {
        ...state
      };
    case SocketTypes.JOINED:
      return {
        ...state,
        players: {
          ...state.players, ...action.payload.payload.players
        }
      };
    case SocketTypes.START_GAME:
      return {
        ...state
      };
    case SocketTypes.START_ROUND:
      return {
        ...state,
        word: [action.payload.payload.word],
        timer: {
          ...state.timer,
          ...action.payload.payload.timer
        }
      };
    case SocketTypes.END_ROUND:
      return {
        ...state,
        inBetweenRounds: !state.inBetweenRounds
      };
    case SocketTypes.GUESS:
      return {
        ...state
      };
    case SocketTypes.VICTORY:
      return {
        ...state
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
    case SocketTypes.FAILURE:
      return {
        ...state,
        join: {
          //   ...state.join,
          error: 'Game does not exist'
        }
      };
    default:
      return state;
  }
};

export default socketReducer;
