import { Dispatch, SetStateAction } from 'react'
import { Button } from './Button'

type TimerProps = {
  stop: boolean
  setStop: Dispatch<SetStateAction<boolean>>
}

export function Controls({ stop, setStop }: TimerProps) {
  const handleStopTimer = () => {
    setStop(!stop)
  }

  const handleToggleModal = () => {
    console.log('open modal')
  }

  return (
    <div className="flex items-start gap-6">
      <Button
        onClick={handleStopTimer}
        icon={stop ? 'play' : 'stop'}
        ariaLabel={stop ? 'Start timer' : 'Stop timer'}
      ></Button>

      <Button
        onClick={handleToggleModal}
        icon="config"
        ariaLabel="configuration"
      ></Button>
    </div>
  )
}
