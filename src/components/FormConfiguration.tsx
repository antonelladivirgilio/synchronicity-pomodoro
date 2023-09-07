import React, { useId, useState } from "react";
import { BLOCKS_TIME, CICLE_STATES } from "../constants";
import { type CiclePos } from "../types";
import { usePomodoro } from "../hooks/usePomodoro";
import { Select } from "./Select";

export function FormConfiguration() {
  const inputId = useId();
  const timeList = Array.from(Object.values(BLOCKS_TIME));

  const { cicle, updateCicle } = usePomodoro();
  const [timers, setTimers] = useState<CiclePos[]>(cicle);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;

    const updatedValue = timers.map((current) => {
      if (current.state === name) {
        return {
          ...current,
          time: parseInt(value),
        };
      } else {
        return current;
      }
    });

    setTimers(updatedValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    updateCicle({ cicle: timers });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`pomodoro-${inputId}`}>Pomodoro</label>

      <Select
        options={timeList}
        id={`pomodoro-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.POMODORO}
        defaultValue={5}
      />

      <label htmlFor={`short-break-${inputId}`}>Short break</label>
      <Select
        options={timeList}
        id={`short-break-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.SHORT_BREAK}
        defaultValue={2}
      />

      <label htmlFor={`long-break-${inputId}`}>Long break</label>
      <Select
        options={timeList}
        id={`long-break-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.LONG_BREAK}
        defaultValue={2}
      />

      <button>Guardar cambios</button>
    </form>
  );
}
