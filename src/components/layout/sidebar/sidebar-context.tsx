import { createContext, useContext } from "react";

export const SidebarContext = createContext<boolean>(false)

type SidebarContextProviderProps = {
  children: React.ReactNode
  compact: boolean
}

export default function SidebarContextProvider({ children, compact }: SidebarContextProviderProps) {
  return (
    <SidebarContext.Provider value={compact}>
      { children }
    </SidebarContext.Provider>
  )
}

export function useSidebarContent() {
  return useContext(SidebarContext)
}
