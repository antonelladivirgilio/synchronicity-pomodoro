import { usePomodoroContext } from "../contexts/pomodoroContext";
import { CiclePos } from "../types";

export function usePomodoro() {
  const context = usePomodoroContext();
  if (context === undefined)
    throw new Error(
      "usePomodoroContext must be used within a PomodoroContextProvider"
    );

  const [cicle, setCicle] = context;
  const updateCicle = ({ state, time }: CiclePos) => {
    const updatedCicle: CiclePos[] = [
      ...cicle,
      {
        state,
        time,
      },
    ];
    setCicle(updatedCicle);
  };
  return { cicle, updateCicle };
}
