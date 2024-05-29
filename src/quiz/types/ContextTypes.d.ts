import React from "react"
import { Question } from "./HookTypes";


/** Types for Return Values of Context Functions */
export interface NexQuizContext {
  active: State;
  setActive: React.Dispatch<React.SetStateAction<State>>;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  viewModal: boolean;
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
  backModal: boolean;
  setViewBackModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ScoresContext {
  score: React.MutableRefObject<number>;
  incrementScore: CallableFunction;
  decrementScore: CallableFunction;

  responseTime: React.MutableRefObject<number>;
  updateResponseTime: CallableFunction;

  aciertos: React.MutableRefObject<number>;
  updateAciertos: CallableFunction;
  
  resetEvery: CallableFunction;
};

export interface UsersContext {
  state: CateroryScore[],
  bestScore: React.MutableRefObject<number>,
  updateData: CallableFunction
}

/** Types for Props of Context Functions */

export interface ContextProviderProps {
    children: JSX.Element[] | JSX.Element
}

/** Types for Props of Reducer Context */
interface State {
    enable: boolean,
    blocked: boolean,
    refId: string
};

export interface CateroryScore {
  name: string;
  puntos: number;
  tiempo: number;
}

export interface Action {
  type: string;
  paylod: CateroryScore;
};

