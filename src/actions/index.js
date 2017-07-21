import * as types from '../constants/action-type';

export const newGame = () => {
  return {
    type: types.NEW_GAME
  };
};

export const toggleGame = status => {
  return {
    type: types.TOGGLE_GAME,
    payload: status
  };
};

export const throwingGesture = () => {
  return {
    type: types.THROWING_GESTURE
  };
};
