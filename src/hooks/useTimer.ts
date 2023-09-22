import { useContext } from 'react'
import { TimerContext } from '../contexts/timerContext'

export function useTimer() {
  const context = useContext(TimerContext)

  if (!context) throw new Error('useTimer must be used within a TimerProvider')

  const [time, setTime] = context

  const updateTime = (time: number) => {
    setTime(time)
  }

  return { time, updateTime }
}
