import { useEffect, SetStateAction, Dispatch } from 'react'
import { useTimer } from '../hooks/useTimer'

type Props = {
  stop: boolean
  setStop: Dispatch<SetStateAction<boolean>>
}

export function Timer({ stop, setStop }: Props) {
  const { time, updateTime } = useTimer()

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) return
      updateTime(time + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [time, stop])

  const handleStopTimer = () => {
    setStop(!stop)
  }

  return (
    <>
      {time}
      <button onClick={handleStopTimer}>{stop ? 'Start' : 'Stop'}</button>
    </>
  )
}
