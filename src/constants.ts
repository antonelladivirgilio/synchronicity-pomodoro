export const CICLE_STATES = Object.freeze({
  POMODORO: "POMODORO",
  SHORT_BREAK: "SHORT_BREAK",
  LONG_BREAK: "LONG_BREAK",
});

export const BLOCKS_TIME = Object.freeze({
  MINUTES_60: 60,
  MINUTES_55: 55,
  MINUTES_50: 50,
  MINUTES_45: 45,
  MINUTES_40: 40,
  MINUTES_35: 35,
  MINUTES_30: 30,
  MINUTES_25: 25,
  MINUTES_20: 20,
  MINUTES_15: 15,
  MINUTES_10: 10,
  MINUTES_5: 5,
  MINUTES_1: 1,
});

export const CICLE = [
  {
    state: CICLE_STATES.POMODORO,
    time: BLOCKS_TIME.MINUTES_25,
  },
  {
    state: CICLE_STATES.SHORT_BREAK,
    time: BLOCKS_TIME.MINUTES_5,
  },
  {
    state: CICLE_STATES.POMODORO,
    time: BLOCKS_TIME.MINUTES_25,
  },
  {
    state: CICLE_STATES.SHORT_BREAK,
    time: BLOCKS_TIME.MINUTES_5,
  },
  {
    state: CICLE_STATES.POMODORO,
    time: BLOCKS_TIME.MINUTES_25,
  },
  {
    state: CICLE_STATES.LONG_BREAK,
    time: BLOCKS_TIME.MINUTES_15,
  },
];
