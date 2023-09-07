import { useState } from "react";
import { usePomodoro } from "../hooks/usePomodoro";

export function Clock() {
  const { cicle } = usePomodoro();

  console.log({ cicle });

  const [time, setTime] = useState();

  return <h1>reloj: {JSON.stringify(cicle)}</h1>;
}
