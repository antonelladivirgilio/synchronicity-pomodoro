import { ReactNode, createContext, useState, useContext } from "react";
import { CICLE } from "../constants";
import { CiclePos } from "../types";

export const usePomodoros = (initial: CiclePos[]) =>
  useState<CiclePos[]>(initial);
export type UsePomodoroType = ReturnType<typeof usePomodoros>;
export type PomodoroType = UsePomodoroType[0];
export type SetPomodoroType = UsePomodoroType[1];

export const PomodoroContext = createContext<UsePomodoroType | null>(null);

export const usePomodoroContext = () => useContext(PomodoroContext)!;

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const initialState: CiclePos[] = [...CICLE];

  return (
    <PomodoroContext.Provider value={usePomodoros(initialState)}>
      {children}
    </PomodoroContext.Provider>
  );
};
