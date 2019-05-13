import * as SocketTypes from '../actions/socketTypes';

const socketReducer = (state = {}, action) => {
  console.log('HERE GOES THE SOCKET ACTION: ', action)
  switch(action.payload.type) {
    case SocketTypes.GAME_CREATED: 
    return {
      ...state,
      message: action.payload.payload
    };
    case SocketTypes.JOINED: 
    return {
      ...state,
      message: action.payload.payload
    };
    case SocketTypes.START_GAME:
    return {
      ...state
    };
    case SocketTypes.START_ROUND:
    return {
      ...state
    };
    case SocketTypes.GUESS:
    return {
      ...state
    };
    case SocketTypes.VICTORY:
    return {
      ...state
    };
    case SocketTypes.ROUND_OVER:
    return {
      ...state
    };
    case SocketTypes.ROUND_DRAWINGS:
    return {
      ...state
    };
    case SocketTypes.GAME_OVER:
    return {
      ...state
    };
    case SocketTypes.FAILURE:
    return {
      ...state,
      join: {
      //   ...state.join,
        error: 'Game does not exist'
      }
    }
    default: 
    return state;
  }
};

export default socketReducer;