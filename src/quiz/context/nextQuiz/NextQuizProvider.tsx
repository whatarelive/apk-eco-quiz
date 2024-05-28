import { useState } from "react"
import { NextQuizContext } from "./NextQuizContext"
import { ContextProviderProps } from "../../types";



export const NextQuizProvider = ({ children }: ContextProviderProps ) => {

  const [ active, setActive ] = useState({
    enable: false,
    blocked: false,
    refId: ''
  });

  const [ status, setStatus ] = useState( false );

  const [ viewModal, setViewModal ] = useState( false );
  const [ backModal, setViewBackModal ] = useState( false );

  return (
    <NextQuizContext.Provider value={{ active, status, viewModal, backModal, setActive, setStatus, setViewModal, setViewBackModal }}>
        { children }
    </NextQuizContext.Provider>
  )
}
