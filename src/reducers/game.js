import * as types from '../constants/action-type';

const game = (state = { isPlayed: false }, action) => {
  switch (action.type) {
  case types.TOGGLE_GAME:
    return { ...state, isPlayed: action.payload };
  }
  return state;
};

export default game;
