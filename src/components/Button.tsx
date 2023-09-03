type ButtonProps = {
    onClick: () => void;
    text: string;
    ariaLabel?: string
}

export function Button({onClick, text, ariaLabel}: ButtonProps) {

    return <button onClick={onClick} aria-label={ariaLabel}>{text}</button>
}
