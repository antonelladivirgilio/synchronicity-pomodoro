import { usePomodoroContext } from "../contexts/pomodoroContext";
import { CiclePos } from "../types";

export function usePomodoro(): {
  cicle: CiclePos[];
  updateCicle: ({ cicle }: { cicle: CiclePos[] }) => void;
} {
  const context = usePomodoroContext();
  if (context === undefined)
    throw new Error(
      "usePomodoroContext must be used within a PomodoroContextProvider"
    );

  const [cicle, setCicle] = context;

  const updateCicle = ({ cicle }: { cicle: CiclePos[] }) => {
    // const updatedCicle: CiclePos[] = cicle.map((currentPosition) => {
    //   if (currentPosition.state === state) {
    //     return {
    //       state,
    //       time,
    //     };
    //   } else {
    //     return currentPosition;
    //   }
    // });
    setCicle(cicle);
  };

  return { cicle, updateCicle };
}
