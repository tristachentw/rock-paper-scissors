import * as types from '../constants/action-type';

const GESTURES = ['rock', 'paper', 'scissors'];
const useFloor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calculateWinner = (player1, player2) => {
  const result = GESTURES.indexOf(player1.gesture) - GESTURES.indexOf(player2.gesture);
  switch(result) {
  case 0:
    return [1, 1];
  case 1:
  case -2:
    return [1, 0];
  case -1:
  case 2:
    return [0, 1];
  }
};

const players = (state = [], action) => {
  switch (action.type) {
  case types.NEW_GAME:
    return new Array(2).fill(undefined).map(p => player(p, action));
  case types.THROWING_GESTURE:
    return state.map(p => player(p, action));
  case types.TOGGLE_GAME:
    if (!action.payload) {
      const results = calculateWinner(state[0], state[1]);
      return state.map((p,i) => player(p, {
        type: types.SET_WINNER,
        payload: results[i]
      }));
    } else {
      return state.map(p => player(p, {
        type: types.NEW_GAME
      }));
    }
  }
  return state;
};

const player = (state = { gesture: '', isWinner: false }, action) => {
  switch (action.type) {
  case types.NEW_GAME:
    const gesture = GESTURES[useFloor(0, 2)];
    return { ...state, gesture, isWinner: false };
  case types.THROWING_GESTURE:
    return { ...state, gesture: GESTURES[useFloor(0, 2)] };
  case types.SET_WINNER:
    return { ...state, isWinner: action.payload === 1 };
  }
  return state;
};

export default players;
