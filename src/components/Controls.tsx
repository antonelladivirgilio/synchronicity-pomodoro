import { Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { useTimer } from '../hooks/useTimer'

type TimerProps = {
  stop: boolean
  setStop: Dispatch<SetStateAction<boolean>>
}

export function Controls({ stop, setStop }: TimerProps) {
  const { updateTime } = useTimer()
  const handleStop = () => {
    setStop(!stop)
  }

  const handleConfig = () => {
    console.log('open modal')
  }

  const handleReset = () => {
    updateTime(0)
    setStop(!stop)
  }

  return (
    <div className="flex items-start gap-6">
      <Button
        onClick={handleStop}
        icon={stop ? 'play' : 'pause'}
        ariaLabel={stop ? 'start timer' : 'stop timer'}
      ></Button>

      <Button onClick={handleReset} icon="stop" ariaLabel="reset"></Button>

      <Button
        onClick={handleConfig}
        icon="config"
        ariaLabel="configuration"
      ></Button>
    </div>
  )
}
