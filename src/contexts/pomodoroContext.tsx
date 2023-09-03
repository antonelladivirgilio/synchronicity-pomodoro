import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'
import { CICLE } from '../constants'

type CiclePos = {
    state: 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'
    time: number
}

type PomodoroContextType = {
    cicle: CiclePos[] | null,
    setCicle: Dispatch<SetStateAction<CiclePos[] | null>>
}

export const PomodoroContext = createContext<PomodoroContextType | null>(null)

type PomodoroProviderProps = {
    children: ReactNode | ReactNode[]
}

export const PomodoroProvider = ({children}: PomodoroProviderProps) => {    

    const initialCicle: CiclePos[] = [...CICLE]
    const [cicle, setCicle] = useState<CiclePos[] | null>(initialCicle)

    return(
        <PomodoroContext.Provider value={{cicle, setCicle}}>
            {children}
        </PomodoroContext.Provider>
    )
}