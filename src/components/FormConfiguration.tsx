import { useId } from "react";

export function FormConfiguration() {
  const inputId = useId();
  return (
    <form>
      <label>Pomodoro</label>
      <input id={`pomodoro-${inputId}`}></input>

      <label>Short break</label>
      <input id={`short-break-${inputId}`}></input>

      <label>Long break</label>
      <input id={`long-break-${inputId}`}></input>

      <button>Guardar cambios</button>
    </form>
  );
}
