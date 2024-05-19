import { useReducer } from "react"
import { NextQuizContext } from "./NextQuizContext"
import { NextQuizContextProps } from "../types";
import { nextQuizReducer } from "./nextQuizReducer";


const initialState = {
    enable: false,
    blocked: false,
    refId: '',
}

export const NextQuizProvider = ({ children }: NextQuizContextProps ) => {

  const [ active, setActive ] = useReducer( nextQuizReducer ,initialState );

  return (
    <NextQuizContext.Provider value={{ active, setActive }}>
        { children }
    </NextQuizContext.Provider>
  )
}
