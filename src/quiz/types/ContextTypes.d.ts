import React from "react"


/** Types for Return Values of Context Functions */

export type NexQuizContext = {
    active: State,
    setActive: React.Dispatch<React.SetStateAction<State>>
}


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

type Action = {
  type: string;
  paylod: State;
};
