import {
  Cog8ToothIcon,
  PauseIcon,
  PlayIcon,
  StopIcon
} from '@heroicons/react/20/solid'

type Props = {
  icon: 'play' | 'stop' | 'pause' | 'config'
}

export function ButtonIcon({ icon }: Props) {
  const iconButton = {
    play: <PlayIcon />,
    pause: <PauseIcon />,
    stop: <StopIcon />,
    config: <Cog8ToothIcon />
  }

  return <span className="h-6 w-6 text-white m-2">{iconButton[icon]}</span>
}
