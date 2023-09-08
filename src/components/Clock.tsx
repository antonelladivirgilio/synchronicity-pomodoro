import { useState, useEffect, useRef } from "react";
import { usePomodoro } from "../hooks/usePomodoro";
import { millisecondsToMinutes } from "../utils/millisecondsToMinutes";

export function Clock() {
  const { cicle } = usePomodoro();
  const cicleCounter = useRef(0);

  const currentCicle = cicle[cicleCounter.current]?.state;
  const initialTime = cicle[cicleCounter.current]?.time;

  const [time, setTime] = useState(initialTime);
  const [focusing, setFocusing] = useState(false);

  const handleFocusing = () => {
    setFocusing(!focusing);
  };

  const handleReset = () => {
    cicleCounter.current = 0;
    setFocusing(false);
    setTime(initialTime);
  };

  useEffect(() => {
    if (time === 0) {
      cicleCounter.current += 1;

      if (cicleCounter.current > 5) {
        handleReset();
        return;
      }

      setTime(cicle[cicleCounter.current].time);
      return;
    }

    const updateTime = setInterval(() => {
      if (!focusing) return;

      setTime((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(updateTime);
  });

  return (
    <>
      <h1>reloj: {millisecondsToMinutes(time)}</h1>
      <h2>{currentCicle}</h2>

      <button onClick={handleFocusing}>{focusing ? "Pausa" : "Empezar"}</button>
      <button onClick={handleReset}>Reset Pomodoro</button>
    </>
  );
}
