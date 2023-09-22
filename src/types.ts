import React from 'react'

export type TimerProps = {
  stop: boolean
  setStop: React.Dispatch<React.SetStateAction<boolean>>
}

export type PomodoroState = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

export type CiclePos = {
  state: PomodoroState
  time: number
}
