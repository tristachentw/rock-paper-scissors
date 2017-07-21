import * as types from '../constants/action-type';

export const throwingGesture = () => {
  return {
    type: types.THROWING_GESTURE
  };
};

export const newGame = () => {
  return {
    type: types.NEW_GAME
  };
};

export const startGame = () => {
  return {
    type: types.START_GAME
  };
};

export const stopGame = () => (dispatch, getState) => {
  dispatch({ type: types.STOP_GAME });
  const isEnd = getState().players.some(p => p.isWinner);
  if (isEnd) {
    dispatch({ type: types.END_GAME });
  }
};
