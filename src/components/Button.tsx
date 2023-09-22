import { ButtonIcon } from './ButtonIcon'

type ButtonProps = {
  onClick: () => void
  text?: string
  ariaLabel?: string
  icon?: 'play' | 'stop' | 'pause' | 'config'
}

export function Button({ onClick, icon, text, ariaLabel }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${icon} rounded-md grid grid-flow-col bg-blue-600 place-items-center`}
    >
      {icon && <ButtonIcon icon={icon} />}
      {text && <span className="text-white mr-4">{text}</span>}
    </button>
  )
}
