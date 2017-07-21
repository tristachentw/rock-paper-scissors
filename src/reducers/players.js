import * as types from '../constants/action-type';

const PLAYERS = 2,
      NEED_WINS = 2,
      GESTURES = ['rock', 'paper', 'scissors'];

const useFloor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calculateWinner = (player1, player2) => {
  const result = GESTURES.indexOf(player1.gesture) - GESTURES.indexOf(player2.gesture);
  switch(result) {
  case 0:
    return [0, 0];
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
    return new Array(PLAYERS).fill(undefined).map(p => player(p, action));
  case types.STOP_GAME:
    const results = calculateWinner(state[0], state[1]);
    return state.map((p, i) => player(p, {
      type: types.ADD_WIN_RECORD,
      payload: results[i]
    }));
  default:
    return state.map(p => player(p, action));
  }
};

const player = (state = { gesture: '', wins: 0, isWinner: false }, action) => {
  switch (action.type) {
  case types.NEW_GAME:
    return {
      gesture: GESTURES[useFloor(0, 2)],
      wins: 0,
      isWinner: false
    };
  case types.THROWING_GESTURE:
    return {
      ...state,
      gesture: GESTURES[useFloor(0, 2)]
    };
  case types.ADD_WIN_RECORD:
    const wins = state.wins + action.payload;
    return {
      ...state,
      wins,
      isWinner: wins >= NEED_WINS
    };
  }
  return state;
};

export default players;
