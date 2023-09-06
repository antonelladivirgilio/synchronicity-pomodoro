export type PomodoroState = "POMODORO" | "SHORT_BREAK" | "LONG_BREAK";

export type CiclePos = {
  state: PomodoroState;
  time: number;
};
