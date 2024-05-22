import React from "react"
import { Question } from "./HookTypes";


/** Types for Return Values of Context Functions */
export type NexQuizContext = {
    active: State,
    setActive: React.Dispatch<React.SetStateAction<State>>
}

export type ScoresContext = {
  counter: number,
  reset: CallableFunction,
  response: Response,
  setResponse: React.Dispatch<React.SetStateAction<Response>>
};


/** Types for Props of Context Functions */

export type ContextProviderProps = {
    children: JSX.Element[] | JSX.Element
}

/** Types for Props of Reducer Context */
type State = {
    enable: boolean,
    blocked: boolean,
    refId: string
};

type Response = {
  categoryID: string;
  responseID: number;
  respID: string;
}

type Action = {
  type: string;
  paylod: State;
};
