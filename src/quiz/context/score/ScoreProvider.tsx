import { useRef } from "react";
import { ContextProviderProps } from "../../types"
import { ScoreContext } from "./ScoreContext"


export const ScoreProvider = ({ children }: ContextProviderProps ) => {

  const score = useRef(0);
  const responseTime = useRef(0);
  const aciertos = useRef(0);

  const incrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore + value;
  }

  const decrementScore = ( value: number ) => {
    const revScore = score.current;
    score.current = revScore - value;
  }

  const reset = () => score.current = 0;

  const updateResponseTime = ( time: number ) => {
    const revResponsiveTime = responseTime.current;
    responseTime.current =  time + revResponsiveTime;
  };

  const resetTime = () => responseTime.current = 0;

  const updateAciertos = ( acierto: number ) => {
    const revAciertos = aciertos.current;
    aciertos.current = revAciertos + acierto;
  }

  const resetAciertos = () => aciertos.current = 0;

  return (
    <ScoreContext.Provider value={{ 
        score, incrementScore, decrementScore, reset, 
        responseTime, updateResponseTime, resetTime, 
        aciertos, updateAciertos, resetAciertos }}
      >
      { children }
    </ScoreContext.Provider>
  )
}
