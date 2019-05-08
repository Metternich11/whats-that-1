import * as ActionTypes from "../actions/types";

const initialState = {
  createGame: undefined
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_GAME:
      return {
        ...state
      };
    default:
      return state;
  }
};
