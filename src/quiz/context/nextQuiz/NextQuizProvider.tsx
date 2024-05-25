import { useState } from "react"
import { NextQuizContext } from "./NextQuizContext"
import { ContextProviderProps } from "../../types";



export const NextQuizProvider = ({ children }: ContextProviderProps ) => {

  const [ active, setActive ] = useState({
    enable: false,
    blocked: false,
    refId: ''
  });

  return (
    <NextQuizContext.Provider value={{ active, setActive }}>
        { children }
    </NextQuizContext.Provider>
  )
}
