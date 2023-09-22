import { useEffect } from 'react'
import { useTimer } from '../hooks/useTimer'
import { millisecondsToMinutes } from '../utils/millisecondsToMinutes'
import { type TimerProps } from '../types'

export function Timer({ stop }: TimerProps) {
  const { time, updateTime } = useTimer()

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) return
      updateTime(time + 1000)
    }, 1000)

    return () => clearInterval(interval)
  }, [time, stop])

  const formattedTime = millisecondsToMinutes(time)
  return (
    <>
      <h1 className="text-center text-7xl self-end mb-16">{formattedTime}</h1>
    </>
  )
}
