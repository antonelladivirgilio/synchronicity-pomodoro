import { Dispatch, SetStateAction, useEffect } from 'react'
import { useTimer } from '../hooks/useTimer'

type TimerProps = {
  stop: boolean
  setStop: Dispatch<SetStateAction<boolean>>
}

export function Timer({ stop }: TimerProps) {
  const { time, updateTime } = useTimer()

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) return
      updateTime(time + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [time, stop])

  return (
    <>
      <h1 className="text-center text-7xl self-end">{time}</h1>
    </>
  )
}
