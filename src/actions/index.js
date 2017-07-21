import * as types from '../constants/action-type';

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

export const stopGame = () => {
  return {
    type: types.STOP_GAME
  };
};

export const endGame = () => {
  return {
    type: types.END_GAME
  };
};

export const throwingGesture = () => {
  return {
    type: types.THROWING_GESTURE
  };
};
