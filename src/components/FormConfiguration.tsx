import React, { useId, useState, useRef } from "react";
import { BLOCKS_TIME, CICLE_STATES } from "../constants";
import { type CiclePos } from "../types";
import { usePomodoro } from "../hooks/usePomodoro";
import { Select } from "./Select";

type defaultValuesType = {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
};

export function FormConfiguration() {
  const inputId = useId();
  const timeList = Array.from(Object.values(BLOCKS_TIME));

  const { cicle, updateCicle } = usePomodoro();
  const [timers, setTimers] = useState<CiclePos[]>(cicle);

  const initialValues: defaultValuesType = {
    pomodoro: cicle[0].time,
    shortBreak: cicle[1].time,
    longBreak: cicle[cicle.length - 1].time,
  };
  const defaultValues = useRef(initialValues);

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
    <form onSubmit={handleSubmit} className="grid">
      <label htmlFor={`pomodoro-${inputId}`}>Pomodoro</label>

      <Select
        options={timeList}
        id={`pomodoro-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.POMODORO}
        defaultValue={defaultValues.current.pomodoro}
      />

      <label htmlFor={`short-break-${inputId}`}>Short break</label>
      <Select
        options={timeList}
        id={`short-break-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.SHORT_BREAK}
        defaultValue={defaultValues.current.shortBreak}
      />

      <label htmlFor={`long-break-${inputId}`}>Long break</label>
      <Select
        options={timeList}
        id={`long-break-${inputId}`}
        onChange={handleSelectChange}
        name={CICLE_STATES.LONG_BREAK}
        defaultValue={defaultValues.current.longBreak}
      />

      <button className="rounded-md bg-lime-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-50">
        Guardar cambios
      </button>
    </form>
  );
}
