import { ReactNode, createContext, useState } from 'react'

const useTimer = (initialTime: number) => useState(initialTime)

type UseTimerType = ReturnType<typeof useTimer>

export const TimerContext = createContext<UseTimerType | null>(null)

type TimerProviderProps = {
  children: ReactNode
}

export function TimerProvider({ children }: TimerProviderProps) {
  const initialState = 0

  return (
    <TimerContext.Provider value={useTimer(initialState)}>
      {children}
    </TimerContext.Provider>
  )
}
