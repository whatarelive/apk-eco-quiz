import { ContextProviderProps } from "../types"
import { ScoreContext } from "./ScoreContext"



export const ScoreProvider = ({ children }: ContextProviderProps ) => {


  return (
    <ScoreContext.Provider value={{}}>
      { children }
    </ScoreContext.Provider>
  )
}
