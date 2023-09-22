import { Cog8ToothIcon } from '@heroicons/react/20/solid'
import { PlayIcon, StopIcon, PauseIcon } from '@heroicons/react/24/solid'

type ButtonProps = {
  onClick: () => void
  text?: string
  ariaLabel?: string
  icon?: 'play' | 'stop' | 'pause' | 'config'
}

export function Button({ onClick, icon, text, ariaLabel }: ButtonProps) {
  const iconButton = {
    play: <PlayIcon />,
    stop: <StopIcon />,
    pause: <PauseIcon />,
    config: <Cog8ToothIcon />
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${icon} rounded-md grid grid-flow-col bg-blue-600 place-items-center`}
    >
      {icon && (
        <span className="h-6 w-6 text-white m-2">{iconButton[icon]}</span>
      )}
      {text && <span className="text-white mr-4">{text}</span>}
    </button>
  )
}
