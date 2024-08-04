import { createContext, useContext, useState } from "react";

export type User = 'teacher' | 'student';

export const LandingContext = createContext<User>('student')

type LandingContextProviderProps = {
  children: React.ReactNode
  type: User
}

export default function LandingContextProvider({ children, type }: LandingContextProviderProps) {
  return (
    <LandingContext.Provider value={type}>
      { children }
    </LandingContext.Provider>
  )
}

export function useLandingContext() {
  const context = useContext(LandingContext)
  return context;
}
