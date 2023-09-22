type ButtonProps = {
  onClick: () => void;
  text?: string;
  ariaLabel?: string;
  children?: JSX.Element;
};

export function Button({ onClick, text, ariaLabel, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="rounded-md bg-lime-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50"
    >
      {text && text}
      {children && children}
    </button>
  );
}
