import { Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { useTimer } from '../hooks/useTimer'

type TimerProps = {
  stop: boolean
  setStop: Dispatch<SetStateAction<boolean>>
}

export function Controls({ stop, setStop }: TimerProps) {
  const { updateTime } = useTimer()
  const handleStopTimer = () => {
    setStop(!stop)
  }

  const handleToggleModal = () => {
    console.log('open modal')
  }

  const handleResetTimer = () => {
    updateTime(0)
  }

  return (
    <div className="flex items-start gap-6">
      <Button
        onClick={handleStopTimer}
        icon={stop ? 'play' : 'pause'}
        ariaLabel={stop ? 'start timer' : 'stop timer'}
      ></Button>

      <Button onClick={handleResetTimer} icon="stop" ariaLabel="reset"></Button>

      <Button
        onClick={handleToggleModal}
        icon="config"
        ariaLabel="configuration"
      ></Button>
    </div>
  )
}
