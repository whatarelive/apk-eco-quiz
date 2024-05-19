import React from "react"


/** Types for Return Values of Context Functions */

export type NexQuizContext = {
    active: State,
    setActive: React.Dispatch<Action>
}


/** Types for Props of Context Functions */

export type NextQuizContextProps = {
    children: JSX.Element[] | JSX.Element
}

/** Types for Props of Reducer Context */
type State = {
    enable?: boolean,
    blocked?: boolean,
    refId?: string
};

type Action = {
  type: string;
  paylod: State;
};
