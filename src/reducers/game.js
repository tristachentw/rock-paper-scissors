import * as types from '../constants/action-type';

const game = (state = { round: 0, status: 'new' }, action) => {
  switch (action.type) {
    case types.NEW_GAME  : return { round: 0, status: 'new' };
    case types.END_GAME  : return { round: -1, status: 'end' };
    case types.START_GAME: return { round: state.round + 1, status: 'start' };
    case types.STOP_GAME : return { ...state, status: 'stop' };
  }
  return state;
};

export default game;
