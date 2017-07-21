import * as types from '../constants/action-type';

const game = (state = { round: 0, isStarted: false, status: 'new' }, action) => {
  switch (action.type) {
    case types.NEW_GAME  : return { round: 0, isStarted: false, status: 'new' };
    case types.END_GAME  : return { round: -1, isStarted: false, status: 'end' };
    case types.START_GAME: return { ...state, isStarted: true, status: 'start' };
    case types.STOP_GAME : return { ...state, round: state.round + 1, status: 'stop' };
  }
  return state;
};

export default game;
